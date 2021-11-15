import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";


// styling
import styled from "@emotion/styled";
import { mediaQuery, base, Date } from "../styles/global.js";

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
			<ExternalLink
				href={externalLink}
				activeStyle={{ color: "#BC9612" }}
				partiallyActive={true}
				target="_blank"
			>
				<Thumbnail
                	fluid={image}
                	alt={title}
            	/>
				<Date>{date}</Date>
			
            	<BodyText dangerouslySetInnerHTML={{ __html: body }}/>
			</ExternalLink>
			
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
		font-size: 1.5rem;
	}
`;

const Thumbnail = styled(Img)`
	max-width: 95%;
	max-height: 125px;
	border-radius: 10px 10px 5px 5px;
	object-fit: contain;
	margin: 5px auto;
	${mediaQuery[2]} {
		max-height: 200px;
	}
	${mediaQuery[4]} {
		max-height: 300px;
	}
	
`;

const ExternalLink = styled.a`
    text-decoration: none;
    color: #798be4;
    font-size: 1.2rem;
	:hover {
		color: #dbe7fb;
		box-shadow: 0 4px 8px 0 rgba(121, 139, 228, 0.4),
			0 6px 20px 0 rgba(121, 139, 228, 0.35);
	}
	:focus {
		color: #bc9612;
		box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4),
			0 6px 20px 0 rgba(188, 150, 18, 0.35);
	}
	:active {
		color: #bc9612;
		box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4),
			0 6px 20px 0 rgba(188, 150, 18, 0.35);
	}
	${mediaQuery[2]} {
		font-size: 2rem;
	}
	${mediaQuery[4]} {
		font-size: 2.4rem;
	}
`;

const BodyText = styled.article`
    max-width: 90%;
	margin: auto 0;
`;

