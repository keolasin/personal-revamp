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
			thumbnailImg: File @link(from: "thumbnailImg___NODE")
			fields: Field
        }

        type Frontmatter {
            title: String!
            image: String
            imageAlt: String
            coverImg: String
        }

		type Field {
			slug: String
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
	if (node.internal.type === "MarkdownRemark" && (node.frontmatter.image || node.frontmatter.coverImg)) {
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

	// check for templated pages (such as index, contact) and create linked node for remote images
	if (node.internal.type === `MarkdownRemark` && node.frontmatter.templateKey) {
		const slug = createFilePath({ node, getNode });
		// creating url slug
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});

		// creating remote image nodes
		let imageNode = await createRemoteFileNode({
			url: node.frontmatter.thumbnailImg,
			parentNodeId: node.id,
			createNode,
			createNodeId,
			cache,
			store,
		});

		// link thumbnailImg node to parent node as 'thumbnailImg' field on parent node
		if (imageNode) {
			createParentChildLink({ parent: node, child: imageNode });
			node.thumbnailImg___NODE = imageNode.id;
		}

		// triggers for index-page template
		if (node.frontmatter.wideBackground && node.frontmatter.tallBackground) {
			let wideBackground = await createRemoteFileNode({
				url: node.frontmatter.wideBackground,
				parentNodeId: node.id,
				createNode,
				createNodeId,
				cache,
				store,
			});

			let tallBackground = await createRemoteFileNode({
				url: node.frontmatter.tallBackground,
				parentNodeId: node.id,
				createNode,
				createNodeId,
				cache,
				store,
			});

			// linking remote nodes as children to parent node (see typeDefs at top)
			if (wideBackground) {
				createParentChildLink({ parent: node, child: wideBackground });
				node.wideBackground___NODE = wideBackground.id;
			}

			if (tallBackground) {
				createParentChildLink({ parent: node, child: tallBackground });
				node.tallBackground___NODE = tallBackground.id;
			}
		}
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
			templates: allMarkdownRemark(
				filter: { frontmatter: { templateKey: { ne: null } } }
			) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							templateKey
						}
					}
				}
			}
		}
	`);

	// create template pages
	result.data.templates.edges.forEach(({ node }) => {
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/${String(node.frontmatter.templateKey)}.js`),
			context: {
				nodeId: node.id,
			}
		});
	});

	// create project pages
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

	// create album pages
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
