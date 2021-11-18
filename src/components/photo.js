import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { navigate } from "@reach/router";

// styling
import styled from "@emotion/styled";
import { colors } from "../styles/global";

import Layout from "./layout";

// data query
// context provided from gatsby-node.js:
/*
    photoID: child.id,
    parentAlbum: node.frontmatter.title
*/
export const query = graphql`
	query($photoID: String!) {
		file(id: { eq: $photoID }) {
			name
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid_withWebp
					originalName
				}
			}
		}
	}
`;

// component
export default ({ data, location }) => {
	const photo = data.file.childImageSharp;
	const photoName = data.file.name;

	return (
		<Layout>
			<LinkModal>
				<FullImage
					fluid={photo.fluid}
					alt={photo.fluid.originalName}
					title={photo.fluid.originalName}
					imgStyle={{ objectFit: "contain" }}
				/>
				<CloseButton
					onClick={() => {
						navigate(`./#${photoName}`);
					}}
				>
					Close
				</CloseButton>
			</LinkModal>
		</Layout>
	);
};

// css styling
const LinkModal = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	padding: 1rem;
	background-color: rgba(0, 0, 0, 0.8);
`;

const CloseButton = styled.a`
	color: ${colors.primaryColor};
	background-color: none;
	position: absolute;
	margin: 20px;
	top: 0;
	right: 0;
	cursor: pointer;
	font-size: 2rem;
	:hover {
		color: ${colors.tertiaryColor};
		font-size: 2.2rem;
	}
	:focus {
		color: ${colors.secondaryColor};
	}
	:active {
		color: ${colors.secondaryColor};
	}
`;

const FullImage = styled(Img)`
	position: relative;
	margin: 0 auto;
	width: 100%;
	height: auto;
	max-width: 100%;
	max-height: 100%;
	object-fit: contain;
`;
