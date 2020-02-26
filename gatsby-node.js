/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// creating nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } =  actions;

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

    // create gallery page containing unique albums with cover image
        createPage({
            path: `/galleries`,
            component: path.resolve(`./src/components/galleries.js`),
            context: {
                
            }
        })
}