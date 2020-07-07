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

    createTypes(`
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
    `);
}

exports.onCreateNode = async({
    node,
    getNode,
    actions: { createNode, createNodeField },
    store,
    cache,
    createNodeId,
}) => {
    /* For all MarkdownRemark nodes that have an:
        "image" url property
        "coverImg" image property
    */
    if ( 
        node.internal.type === "MarkdownRemark" &&
        ( node.frontmatter.image !== null || node.frontmatter.coverImg !== null )
    ) {
        console.log(`if triggered node creation`);
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
}