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
        console.log(node.name, node.relativePath);
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
                    }
                }
            }
        }
    `);
    result.data.allImageSharp.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/components/photo.js`),
            context: {
                slug: node.fields.slug,
            },
        });
    });
}