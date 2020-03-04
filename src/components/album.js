import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
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
            <AlbumGallery>
                {photos.map((image, index) => (
                    <PhotoLink key={index} to={image.node.childImageSharp.fields.slug}>
                        <Image
                            fluid={image.node.childImageSharp.fluid}
                            alt={image.node.childImageSharp.fluid.originalName}
                            title={image.node.childImageSharp.fluid.originalName}
                        />
                    </PhotoLink>
                ))}
            </AlbumGallery>
        </Layout>
    )
}

const AlbumGallery = styled.section`
  display: grid;
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

const PhotoLink = styled(Link)`
  
`;

const Image = styled(Img)`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;