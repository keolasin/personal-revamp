/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath, createRemoteFileNode } = require(`gatsby-source-filesystem`);

// schema declarations
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;

    /*
        to make querying for images easier, especially for albums containing many images, add custom schema typing in graphQL
    */
    const typeDefs = `
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
            image: File @link(from: "image___NODE")
            coverImg: File @link(from: "coverImg___NODE")
        }

        type Frontmatter {
            title: String!
            image: String
            imageAlt: String
            coverImg: String
        }
    `;


    createTypes(typeDefs);
}

exports.onCreateNode = async({ node, getNode, actions: { createNode, createNodeField, createParentChildLink }, store, cache, createNodeId, }) => {
    if ( node.internal.type === "MarkdownRemark" && ( node.frontmatter.image !== null || node.frontmatter.coverImg !== null ) ) {
        let fileNode = await createRemoteFileNode({
            url: node.frontmatter.image || node.frontmatter.coverImg,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
        });

        if (fileNode) {
            node.image___NODE = fileNode.id;
            node.coverImg___NODE = fileNode.id;
        }
    }

    // for all MarkdownRemark nodes that contain a list of album photos in the frontmatter
    if ( node.internal.type === `MarkdownRemark` && node.frontmatter.photos ) {
        // create albumTitle field for easier querying of albums/photos
        createNodeField({
            node,
            name: `albumTitle`,
            value: node.frontmatter.title
        });
        
        // loop through all photos in the album
        node.frontmatter.photos.forEach( async (photo) => {
            let photoNode = await createRemoteFileNode({
                url: photo.image, // cloudinary image url
                parentNodeId: node.id,
                createNode,
                createNodeId,
                cache,
                store,
            });

            if (photoNode) {
                createParentChildLink({ parent: node, child: photoNode });
                /* 
                errors on createNodeField, thinks photoNode is undefined?
                createNodeField({
                    photoNode,
                    name: `slug`,
                    value: photo.title
                });
                */
            }
        });
    }

    if (node.internal.type === `File` && node.internal.mediaType === 'image/jpeg') {
        const slug = node.name;
        
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }

    if ( node.internal.type === 'MarkdownRemark' && node.frontmatter.title ) {
        const slug = node.frontmatter.title;

        createNodeField({
            node,
            name: `slug`,
            value: slug
        })
    }
    if (node.relativeDirectory === `galleries` && node.internal.type === `Directory`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
    }
}

// creating pages with slugs
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    // need to adjust query to only create pages for those that are part of an album as provided in allMarkDownRemark>edges>node>frontmatter>photos
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: {frontmatter: {photos: {elemMatch: {title: {ne: null}}}}, children: {elemMatch: {id: {ne: null}}}}) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        children {
                            ... on File {
                                id
                                fields {
                                    slug
                                }
                                parent {
                                    ... on MarkdownRemark {
                                        id
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    // create unique pages for each album
    result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
        createPage({
            path: `albums/${node.fields.slug}`,
            component: path.resolve(`./src/components/album.js`),
            context: {
                slug: node.fields.slug
            }
        });
        console.log('\n\ncreated page for: ', node.fields.slug, '\n\n');
        
        // create unique pages for each photo
        node.children.forEach( (child) => {
            createPage({
                path: `albums/${node.fields.slug}/${child.fields.slug}`,
                component: path.resolve(`./src/components/photo.js`),
                parentAlbumID: child.parent.id,
                context: {
                    slug: child.fields.slug
                }
            });
            console.log('\n\n page created for: ', child.fields.slug, '\n\n');
        })
    });
}