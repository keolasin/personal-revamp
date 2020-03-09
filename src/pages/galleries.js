import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { mediaQuery } from '../styles/global.js'

import Gallery from "../components/gallery.js"

import Layout from "../components/layout"

// query for the cover photos of each album, along with the name of each album to appear on the galleries page
export const galleryCoverQuery = graphql`
  query {
    allFile(filter: {name: {glob: "*Cover"}, relativeDirectory: {glob: "galleries/*"}}) {
      nodes {
        name
        childImageSharp {
          fluid (maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        relativeDirectory
      }
    }
  }
`
// first generate all the gallery names based on folders in /images/galleries
// then use a cover photo for each of the galleries
// use gallery photos as links to gallery/photos page

const GalleriesPage = ({ data }) => {
  // create album cover nodes
  const covers = data.allFile.nodes;

  return (
    <Layout>
      <Gallery>
        {covers.map((image, index) => (
          <Container
            key={index}
            href={`${image.relativeDirectory.replace('galleries/', '')}`}>
              <AlbumImage
                fluid={image.childImageSharp.fluid}
                alt={image.name}
                title={image.name}
              />
              <Hover>
                <PhotoText>{image.relativeDirectory.replace('galleries/', '')}</PhotoText>
              </Hover>
          </Container>
        ))}
      </Gallery>
    </Layout>
  )
}

export default GalleriesPage

const Container = styled.a`
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

const AlbumImage = styled(Img)`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;