import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styled from "@emotion/styled";
import { mediaQuery, base, Date, colors } from "../styles/global.js";

const ProjectLink = ({ project }) => {
	return (
		<Container>
			<Project to={project.frontmatter.title}>
				<Thumbnail
					fluid={project.image.childImageSharp.fluid}
					alt={project.frontmatter.imageAlt || project.frontmatter.title}
				/>
				<Title>{project.frontmatter.title}</Title>
				<Date>{project.frontmatter.date}</Date>
				<Excerpt>{project.excerpt}</Excerpt>
			</Project>
		</Container>
	);
};

export default ProjectLink;

const Container = styled.article`
	box-shadow: 0 4px 8px 0 rgba(121, 139, 228, 0.2),
		0 6px 20px 0 rgba(121, 139, 228, 0.15);
	:hover {
		box-shadow: 0 4px 8px 0 rgba(121, 139, 228, 0.4),
			0 6px 20px 0 rgba(121, 139, 228, 0.35);
	}
	:focus {
		box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4),
		0 6px 20px 0 rgba(188, 150, 18, 0.35);
	}
	:active {
		box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4),
		0 6px 20px 0 rgba(188, 150, 18, 0.35);
	}
	width: 95%;
	margin: 5px auto;
	border-radius: 25px;
	box-shadow: 0 4px 8px 0;
	border-radius: 25px;8px 0 rgba(188, 150, 18, 0.4),
			0 6px 20px 0 rgba(188, 150, 18, 0.35);
	}
`;

const Title = styled.h2`
	${base}
	text-align: left;
	font-size: 1.4rem;
	font-weight: bold;
	color: ${colors.secondaryColor};
	margin-left: 10px;
	:hover {
		color: ${colors.primaryColor};
	}
	:focus {
		color: ${colors.secondaryColor};
	}
	:active {
		color: ${colors.tertiaryColor};
	}
	${mediaQuery[0]} {
		border-radius: 25px;
	}
	${mediaQuery[1]} {
		font-size: 1.7rem;
	}
	${mediaQuery[2]} {
		font-size: 1.8rem;
	}
	${mediaQuery[3]} {
		font-size: 1.9rem;
	}
	${mediaQuery[4]} {
		font-size: 2.2rem;
	}
`;

const Project = styled(Link)`
	font-family: "acumin-pro", sans-serif;
	text-decoration: none;
	color: ${colors.tertiaryColor};
	cursor: pointer;
	${mediaQuery[1]} {
		font-size: 2rem;
	}
	${mediaQuery[4]} {
		font-size: 2.5rem;
	}
`;

const Excerpt = styled.p`
	font-family: "acumin-pro", sans-serif;
	font-size: 1rem;
	text-align: left;
	text-decoration: none;
	display: inline-block;
	color: ${colors.tertiaryColor};
	margin: 0px 10px;
	margin-bottom: 20px;
	${mediaQuery[0]} {
		font-size: 1.1rem;
	}
	${mediaQuery[1]} {
		font-size: 1.2rem;
	}
	${mediaQuery[2]} {
		font-size: 1.3rem;
	}
	${mediaQuery[3]} {
		font-size: 1.4rem;
	}
	${mediaQuery[4]} {
		font-size: 1.6rem;
	}
`;

const Thumbnail = styled(Img)`
	max-width: 100%;
	max-height: 200px;
	border-radius: 25px 25px 0 0;
	object-fit: contain;
`;
