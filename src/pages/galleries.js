import React, { useState } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'

import Layout from "../components/layout"

// query for the cover photos of each album, along with the name of each album to appear on the galleries page
export const galleryCoverQuery = graphql`
  query {
    allFile(filter: {name: {glob: "*Cover"}, relativeDirectory: {glob: "galleries/*"}}) {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
            originalName
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
        {covers.map((item, index) => (
          <AlbumCover 
            key={index}
            href={`${item.relativeDirectory.replace('galleries/', '')}`}>
              <AlbumImage
                fluid={item.childImageSharp.fluid}
                alt={item.childImageSharp.fluid.originalName}
                title={item.childImageSharp.fluid.originalName}
              />
          </AlbumCover>
        ))}
      </Gallery>
    </Layout>
  )
}

/*
{item.relativeDirectory.replace('galleries/','').charAt(0).toUpperCase() + item.name.slice(1)}
            onMouseEnter={ () => setStyling(0.8, true) }
            onMouseLeave={ () => setStyling(1, false) }
*/

export default GalleriesPage


// media query breakpoints array = [320, 480, 768, 992, 1200];
const Gallery = styled.section`
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

const AlbumCover = styled.a`
  
`;

const AlbumImage = styled(Img)`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;