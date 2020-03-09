import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery } from '../styles/global.js'

import Gallery from "./gallery.js"

import Layout from "../components/layout"

// data query
export const query = graphql`
    query($slug: String!, $parentAlbum: String!) {
        directory (fields: {slug: {eq: $slug }}) {
            name
        }
        allFile (filter: {relativeDirectory: {eq: $parentAlbum }}) {
            edges {
                node {
                    name
                    childImageSharp {
                        fluid (maxWidth: 1920){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    }
`;

// component
export default ({ data }) => {
    const album = data.directory;
    const photos = data.allFile.edges;
    
    return (
        <Layout>
            <h2>{album.name.charAt(0).toUpperCase()+album.name.slice(1)}</h2>
            <Gallery>
                {photos.map((image, index) => (
                    <Container key={index} to={image.node.childImageSharp.fields.slug}>
                        <ImageTile
                            fluid={image.node.childImageSharp.fluid}
                            alt={image.node.childImageSharp.fluid.originalName}
                            title={image.node.childImageSharp.fluid.originalName}
                        />
                        <Hover>
                            <PhotoText>{image.node.name}</PhotoText>
                        </Hover>
                    </Container>
                ))}
            </Gallery>
        </Layout>
    )
}

const Container = styled(Link)`
    position: relative;
    overflow: hidden;
    cursor: pointer; 
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
    background-color: grey;
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