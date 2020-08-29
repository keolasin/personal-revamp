import { React, useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import styled from "@emotion/styled";
import { mediaQuery, Container, BlurbImage } from "../styles/global.js";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
	const portrait = useStaticQuery(graphql`
		query {
			file(name: { eq: "portrait" }) {
				childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="home" />
			<Container>
				<BlurbImage
					fluid={portrait.file.childImageSharp.fluid}
					alt="Yours truly"
				/>
				<BodyText>
					Hello, I'm <AltEmphasis>Matthew Reyes.</AltEmphasis> I live in{" "}
					<Emphasis>San Francisco.</Emphasis>
					<br />
					Check out my photos or some of the projects I've done.
				</BodyText>
			</Container>
		</Layout>
	);
};

export default IndexPage;

// css styling
const BodyText = styled.p`
	border-radius: 25px;
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

const Emphasis = styled.strong`
	font-size: 1em;
	font-weight: bold;
	color: #798be4;
`;

const AltEmphasis = styled.strong`
	color: #bc9612;
	font-weight: bold;
	font-size: 1em;
`;
