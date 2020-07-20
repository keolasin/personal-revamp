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

    if ( node.internal.type === `File` && node.internal.mediaType === `image/jpeg` ) {
        const photoSlug = node.name;
        
        createNodeField({
            node,
            name: `slug`,
            value: photoSlug
        })
    }
}

// creating pages with slugs
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    
    const result = await graphql(`
        query {
            allMarkdownRemark(filter: {frontmatter: {photos: {elemMatch: {title: {ne: null}}}}}) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                        }
                        children {
                            ... on File {
                                id
                                name
                            }
                        }
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
        // slug for albums
        const albumSlug = decodeURIComponent(node.frontmatter.title).replace(/\s/g, '-');

        // create unique page for each album
        createPage({
            path: `albums/${albumSlug}`,
            component: path.resolve(`./src/components/album.js`),
            // pass albumID in context for page query
            context: {
                albumID: node.id
            }
        });
        
        // loop through all the photos (children) in the album (parent)
        node.children.forEach( async ( child ) => {
            // slug for photos
            const photoSlug = decodeURIComponent(child.name);

            // create unique page for each photo in an album
            await createPage({
                path: `albums/${albumSlug}/${photoSlug}`,
                component: path.resolve(`./src/components/photo.js`),
                // provide photoID in context for page query
                context: {
                    photoID: child.id,
                    parentAlbum: node.frontmatter.title // want to know parent album
                }
            });
        })
    });
}