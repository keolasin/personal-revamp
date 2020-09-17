import React from "react";

import { graphql } from "gatsby";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectLink from "../components/projectLink";
import Header from "../components/header";

// styling imports
import styled from "@emotion/styled";

// query for projects
export const projectsQuery = graphql`
	query {
		projects: allMarkdownRemark(
			filter: { frontmatter: { draft: { eq: false } } }
			sort: { order: DESC, fields: [frontmatter___date] }
		) {
			edges {
				node {
					id
					excerpt(pruneLength: 100)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						imageAlt
					}
					image {
						childImageSharp {
							fluid(
								maxWidth: 500
								srcSetBreakpoints: [320, 480, 768, 992, 1200]
							) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
`;

// component
const ProjectPage = ({
	data: {
		projects: { edges },
	},
}) => {
	// create ProjectLink components for each project returned from query
	const Projects = edges.map(edge => (
		<ProjectLink key={edge.node.id} project={edge.node} />
	));

	return (
		<Layout>
			<SEO title="projects" />
			<Header>Projects</Header>
			<Container>{Projects}</Container>
		</Layout>
	);
};

export default ProjectPage;

const Container = styled.section`
	text-align: left;
	height: 100%;
	overflow: hidden;
`;
