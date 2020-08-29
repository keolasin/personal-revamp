import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

// styling imports
import styled from "@emotion/styled";
import { mediaQuery, Container, BlurbImage } from "../styles/global.js";

const ContactPage = () => {
	const data = useStaticQuery(graphql`
		query {
			file(childImageSharp: {}, name: { eq: "coffee" }) {
				childImageSharp {
					fluid(quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO title="contact" />
			<Container>
				<BlurbImage
					fluid={data.file.childImageSharp.fluid}
					alt="Cup of coffee with succulent"
				/>
				<BodyText>
					Email or find me on social media
					<br />
					<Email href="mailto:Matthew@mreyes.info?Subject=Hi%20Matt">
						Matthew@mreyes.info
					</Email>
					<br />
					<Social href="https://github.com/keolasin">Github </Social>
					<span />
					<Social href="https://www.linkedin.com/in/reyesmatthew/">
						LinkedIn{" "}
					</Social>
					<Social href="https://www.instagram.com/keolasin/">Instagram</Social>
				</BodyText>
			</Container>
		</Layout>
	);
};

export default ContactPage;

// specific CSS
const BodyText = styled.p`
	border-radius: 25px;
	color: #dbe7fb;
	font-family: "acumin-pro", sans-serif;
	line-height: 1.2em;
	font-size: 0.8rem;
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

const Social = styled.a`
	font-family: "astounder-squared-bb", sans-serif;
	font-size: 1.2rem;
	font-weight: bold;
	color: #798be4;
	text-decoration: none;
	:hover {
		color: #bc9612;
	}
	:focus {
		color: #798be4;
	}
	:active {
		color: #798be4;
	}
	${mediaQuery[2]} {
		font-size: 2rem;
	}
	${mediaQuery[4]} {
		font-size: 2.5rem;
	}
`;

const Email = styled(Social)`
	color: #bc9612;
	font-size: 1.2rem;
	line-height: 1em;
	:hover {
		color: #dbe7fb;
	}
	:focus {
		color: #798be4;
	}
	:active {
		color: #798be4;
	}
	${mediaQuery[2]} {
		font-size: 2.4rem;
	}
	${mediaQuery[4]} {
		font-size: 3rem;
	}
`;
