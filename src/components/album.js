import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { mediaQuery } from "../styles/global.js"

import Gallery from "./gallery.js"

import Layout from "../components/layout"

// data query
export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug }}) {
            frontmatter {
                description
            }
            children {
                ... on File {
                    name
                    fields {
                        slug
                    }
                    childImageSharp {
                        fluid(maxWidth: 3000) {
                            ...GatsbyImageSharpFluid_withWebp
                            originalName
                        }
                    }
                }
            }
        }
    }
`;

// component
export default ({ data, location }) => {
    console.log(data);
    const photos = data.markdownRemark.children;
    
    return (
        <Layout>
            <AlbumHeader>{}</AlbumHeader>
            <Gallery>
                {photos.map( (image, index) => (
                    <ImageLink key={index} to={image.fields.slug}>
                        <ImageTile
                            fluid={image.childImageSharp.fluid}
                            title={image.childImageSharp.fluid.originalName}
                        />
                        <span id={image.name} />
                        <Hover>
                            <PhotoText>{image.name}</PhotoText>
                        </Hover>
                    </ImageLink>
                ))}
            </Gallery>
        </Layout>
    )
}

const ImageLink = styled(Link)`
    position: relative;
    overflow: hidden;
    cursor: pointer; 
`;

const AlbumHeader = styled.h2`
    font-family: 'astounder-squared-bb';
    color: #BC9612;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    line-height: 1.5em;
    font-size: 1.2rem;
    ${mediaQuery[1]} {
        font-size: 1.8rem;
    }
    ${mediaQuery[4]} {
        font-size: 2.3rem;
    }
`;

const Hover = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
    :hover {
        opacity: 0.8;
    }
`;

const PhotoText = styled.p`
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 3rem;
`;

const ImageTile = styled(Img)`
    width: 100%;
    height: 100%;
`;