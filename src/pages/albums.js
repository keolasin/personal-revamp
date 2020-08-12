import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import AlbumCover from "../components/albumCover"
import Gallery from "../components/gallery"

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