/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const {
	createFilePath,
	createRemoteFileNode,
} = require(`gatsby-source-filesystem`);

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
};

exports.onCreateNode = async ({
	node,
	getNode,
	actions: { createNode, createNodeField, createParentChildLink },
	store,
	cache,
	createNodeId,
}) => {
	// check for all markdown files that have a frontmatter image (albums, projects) and create the image node locally from remote source
	if (
		node.internal.type === "MarkdownRemark" &&
		(node.frontmatter.image !== null || node.frontmatter.coverImg !== null)
	) {
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
	if (node.internal.type === `MarkdownRemark` && node.frontmatter.photos) {
		await Promise.all(
			// loop through all photos in the album
			node.frontmatter.photos.map(async photo => {
				console.time(`creating photo node-${photo.title}`);
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
				console.timeEnd(`creating photo node-${photo.title}`);
			})
		);
	}

	if (
		node.internal.type === `File` &&
		node.internal.mediaType === `image/jpeg`
	) {
		const photoSlug = node.name;

		createNodeField({
			node,
			name: `slug`,
			value: photoSlug,
		});
	}
};

// creating pages with slugs
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
		query {
			albums: allMarkdownRemark(
				filter: {
					frontmatter: { photos: { elemMatch: { title: { ne: null } } } }
				}
			) {
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
			projects: allMarkdownRemark(
				filter: { frontmatter: { link: { ne: null }, draft: { eq: false } } }
			) {
				edges {
					node {
						id
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);

	result.data.projects.edges.forEach(({ node }) => {
		// slug for projects
		const projectSlug = node.frontmatter.title;

		// create unique page for the project
		createPage({
			path: `projects/${projectSlug}`,
			component: path.resolve(`./src/templates/projectTemplate.js`),
			context: {
				projectID: node.id,
			},
		});
	});

	result.data.albums.edges.forEach(({ node }) => {
		// slug for albums
		const albumSlug = node.frontmatter.title;

		// create unique page for each album
		createPage({
			path: `albums/${albumSlug}`,
			component: path.resolve(`./src/components/album.js`),
			// pass albumID in context for page query
			context: {
				albumID: node.id,
			},
		});

		/* 
		***currently using react-image-lightbox to loop through all images, don't need unique url/context for each photo, may change in the future***
		// loop through all the photos (children) in the album (parent)
		node.children.forEach(async child => {
			// slug for photos
			const photoSlug = child.name;

			// create unique page for each photo in an album
			await createPage({
				path: `albums/${albumSlug}/${photoSlug}`,
				component: path.resolve(`./src/components/photo.js`),
				// provide photoID in context for page query
				context: {
					photoID: child.id,
					parentAlbum: node.frontmatter.title, // want to know parent album
				},
			});
		});
		*/
	});
};
