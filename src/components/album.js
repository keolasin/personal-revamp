import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery } from '../styles/global.js'

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
                            originalName
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
            <AlbumGallery>
                {photos.map((image, index) => (
                    <Container key={index} to={image.node.childImageSharp.fields.slug}>
                        <Img
                            fluid={image.node.childImageSharp.fluid}
                            alt={image.node.childImageSharp.fluid.originalName}
                            title={image.node.childImageSharp.fluid.originalName}
                            style={ImageBox}
                            imgStyle={Image}
                        />
                        <Hover>
                            <PhotoText>{image.node.name}</PhotoText>
                        </Hover>
                    </Container>
                ))}
            </AlbumGallery>
        </Layout>
    )
}

const AlbumGallery = styled.section`
  display: grid;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 10px;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(125px, auto);
  ${mediaQuery[0]} {
    font-size: 1.8rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: minmax(250px, auto);
  }
  ${mediaQuery[1]} {
    font-size: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    grid-auto-rows: minmax(275px, auto);
  }
  ${mediaQuery[2]} {
    font-size: 2.3rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: minmax(300px, auto);
  }
  ${mediaQuery[3]} {
    font-size: 2.5rem;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-auto-rows: minmax(350px, auto);
  }
  ${mediaQuery[4]} {
    font-size: 3.5rem;
    grid-gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-auto-rows: minmax(400px, auto);
  }
`;

const Container = styled(Link)`
    position: relative;    
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
    color: #798BE4;
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 1;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 3rem;
`;

const ImageBox = css`
    
`;

const Image = css`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: fill;
    :hover {
        
    }
`;