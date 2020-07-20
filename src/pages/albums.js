import React from "react"
import { graphql } from "gatsby"

import styled from "@emotion/styled"
import { mediaQuery } from "../styles/global.js"

import Layout from "../components/layout"
import AlbumCover from "../components/albumCover"

// query for the cover photos of each album, along with the name of each album to appear on the galleries page
export const albumsQuery = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {photos: {elemMatch: {title: {ne: null}}}}}) {
      edges {
        node {
          frontmatter {
            date
            title
            photographer
            description
          }
          coverImg {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`;

const GalleriesPage = ( {data: {allMarkdownRemark: {edges}}} ) => {
  // albums
  const Albums = edges
    .map( edge => <AlbumCover key={edge.node.id} album={edge.node} />)
  
  return (
    <Layout>
      <Gallery>
        {Albums}
      </Gallery>
    </Layout>
  )
}

export default GalleriesPage;

const Gallery = styled.article`
  display: grid;
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