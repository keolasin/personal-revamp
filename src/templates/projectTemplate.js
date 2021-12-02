import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";


// styling
import styled from "@emotion/styled";
import { mediaQuery, base, Date, colors } from "../styles/global.js";

// imported components
import Layout from "../components/layout";
import Header from "../components/header";
import SEO from "../components/seo";

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

//component template
export const ProjectPageTemplate = ({
    title,
    image,
    body,
	date,
	externalLink
}) => {
	return (
        <Article>
			<Date>{date}</Date>
			<LinkContainer>
				<ExternalLink
					href={externalLink}
					activeStyle={{ color: colors.primaryColor }}
					partiallyActive={true}
					target="_blank"
				>
					<Thumbnail
						fluid={image}
						alt={title}
					/>
				</ExternalLink>
			</LinkContainer>
			<BodyText dangerouslySetInnerHTML={{ __html: body }}/>
        </Article>
	);
};


// component
const ProjectPage = ({ data }) => {
	const project = data.project;
	const { frontmatter, html, image } = project;

	return (
		<Layout>
			<SEO title={frontmatter.title} />
			<Header>{frontmatter.title}</Header>
			<ProjectPageTemplate
				title={frontmatter.title}
				image={image.childImageSharp.fluid}
				date={frontmatter.date}
				body={html}
				externalLink={frontmatter.link}
			>
			</ProjectPageTemplate>
		</Layout>
	);
}

export default ProjectPage;

const LinkContainer = styled.section`
	@keyframes scale {
		0% {
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
		}
		25% {
			-webkit-transform: translateY(2%);
			-ms-transform: translateY(2%);
			transform: translateY(2%);
		}
		50% {
			-webkit-transform: translateY(-3%);
			-ms-transform: translateY(-3%);
			transform: translateY(-3%);
		}
		55% {
			-webkit-transform: translateY(2%);
			-ms-transform: translateY(2%);
			transform: translateY(2%);
		}
		60% {
			-webkit-transform: translateY(0%);
			-ms-transform: translateY(0%);
			transform: translateY(0%);
		}
		100% {
			-webkit-transform: translateY(0%);
			-ms-transform: translateY(0%);
			transform: translateY(0%);
		}
	}
	animation: scale 4s ease-in-out 5s infinite;
	margin: 0 auto;
	border-radius: 15px;
	box-shadow: 0 4px 8px 0 rgba(225,184,200,0.4),
		0 6px 20px 0 rgba(121, 139, 228, 0.35);
	transition: 0.3s;
	position: sticky;
	top: 5px;
	left: 0;
	:hover {
		color: ${colors.secondaryColor};
		box-shadow: 0 4px 8px 0 rgba(121, 139, 228, 0.4),
			0 6px 20px 0 rgba(121, 139, 228, 0.35);
	}
	:focus {
		color: ${colors.secondaryColor};
		box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4),
			0 6px 20px 0 rgba(188, 150, 18, 0.35);
	}
	:active {
		color: ${colors.primaryColor};
		box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4),
			0 6px 20px 0 rgba(188, 150, 18, 0.35);
	}
`;

const Article = styled.article`
	${base}
	background-color: rgba(0,0,0,0.75);
	border-radius: 15px;
	text-align: left;
	color: ${colors.tertiaryColor};
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
		font-size: 1.5rem;
	}
`;

const Thumbnail = styled(Img)`
	max-width: 95%;
	max-height: 75px;
	min-height: 50px;
	border-radius: 15px;
	object-fit: contain;
	margin: 0 auto;
	${mediaQuery[2]} {
		max-height: 125px;
	}
	
`;

const ExternalLink = styled.a``;

const BodyText = styled.article`
    max-width: 95%;
	margin-left: 10px;
	h1, h2, h3, h4, h5, h6 {
		margin: 3px;
		margin-bottom: 10px;
		color: ${colors.secondaryColor}
	}
	h1 {
		font-size: 2.2rem;
	}
	h2 {
		font-size: 2rem;
	}
	h3 {
		font-size: 1.8rem;
	}
	h4 {
		font-size: 1.6rem;
	}
	h5 {
		font-size: 1.4rem;
	}
	h6 {
		font-size: 1.2rem;
	}
	p {
		margin-left: 5px;
	}
	ol {
		margin-left: 40px;
	}
	ul {
		margin-left: 40px;
	}

	${mediaQuery[1]}{
		ol {
			margin-left: 60px;
		}
		ul {
			margin-left: 60px;
		}
	}

	img,
	canvas,
	iframe,
	video,
	svg,
	select,
	textarea {
		max-width: 100%;
	}

	p > code {
		color: ${colors.secondaryColor}
	}

	pre {
		background-color: rgba(225, 184, 200,0.90);
		font-size: .8rem;
		overflow-x: scroll;
		padding: 1.125em;
		font-family: monospace;
		color: rgba(0,0,0,0.75);
		border-radius: 10px;
		margin: 0 auto;
		width: 90%;
	}
	  
	a,
	a:visited {
		color: ${colors.primaryColor};
	}
	  
	a:hover,
	a:focus {
		color: ${colors.secondaryColor};
	}

	a:active {
		color: ${colors.primaryColor}
	}
`;

