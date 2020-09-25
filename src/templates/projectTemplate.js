import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// imported components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

// styling imports
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { mediaQuery, base, Date } from "../styles/global.js";

// query
export const projectQuery = graphql`
	query($projectID: String!) {
		project: markdownRemark(id: { eq: $projectID }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				link
				imageAlt
			}
			image {
				childImageSharp {
					fluid(maxWidth: 1600) {
						...GatsbyImageSharpFluid_withWebp
						originalName
					}
				}
			}
		}
	}
`;

// component
function Project({ data }) {
	const project = data.project;
	const { frontmatter, html, image } = project;

	return (
		<Layout>
			<Header>{frontmatter.title}</Header>
			<Article>
				<Date>{frontmatter.date}</Date>
				<section dangerouslySetInnerHTML={{ __html: html }} />
			</Article>
		</Layout>
	);
}

export default Project;

const Article = styled.article`
	${base}
	background-color: rgba(0,0,0,0.75);
	border-radius: 25px;
	text-align: left;
	color: #dbe7fb;
	font-family: "acumin-pro", sans-serif;
	line-height: 1.2em;
	font-size: 1rem;
	padding: 5px;
	margin: auto 0;
	${mediaQuery[2]} {
		font-size: 1.2rem;
		margin: 10px;
	}
	${mediaQuery[4]} {
		font-size: 1.7rem;
	}
`;
