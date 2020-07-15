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
        console.log(`${node.frontmatter.title} field created on ${node.id}`);
        
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
            }
        });
    }

    if (node.internal.type === `ImageSharp`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        
        createNodeField({
            node,
            name: `slug`,
            value: slug
        });
        
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
            allImageSharp {
                edges {
                    node {
                        fields {
                            slug
                        }
                        parent {
                            ... on File {
                                relativeDirectory
                            }
                        }
                    }
                }
            }
            allDirectory(filter: {relativeDirectory: {eq: "galleries"}}) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    // create unique pages for each photo
    result.data.allImageSharp.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/photo.js`),
            context: {
                slug: node.fields.slug,
                parentAlbum: node.parent.relativeDirectory,
            },
        });
    });

    // create unique pages for each album
    result.data.allDirectory.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/album.js`),
            context: {
                slug: node.fields.slug,
                parentAlbum: node.fields.slug.slice(1, -1), // passing context to page for the page query to receive the photos in that album
            },
        });
    });
}