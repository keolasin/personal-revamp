import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "./layout"

// data query
export const query = graphql`
    query($slug: String!) {
        file(childImageSharp: {fields: {slug: {eq: $slug}}}) {
            relativeDirectory
            childImageSharp {
                fluid (maxWidth: 3000){
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                }
            }
        }
    }
`;

// component
export default ({ data }) => {
    const photo = data.file.childImageSharp;
    const refLink = data.file.relativeDirectory;

    return (
        <Layout>
            <LinkModal to={`/${refLink}`}>
                <FullImage
                    fluid={photo.fluid}
                    alt={photo.fluid.originalName}
                    title={photo.fluid.originalName}
                    imgStyle={{objectFit: "contain"}}
                />
            </LinkModal>
        </Layout>
    )
}

// css styling
const LinkModal = styled(Link)`
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

const FullImage = styled(Img)`
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;

`;