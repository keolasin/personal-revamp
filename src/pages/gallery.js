import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"

export const galleryCoverQuery = graphql`
  query {
    allFile {
      edges {
        node {
          name
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          relativeDirectory
        }
      }
    }
    allDirectory(filter: {relativeDirectory: {eq: "galleries"}}) {
      nodes {
        name
      }
    }
  }
`

// first generate all the gallery names based on folders in /images/galleries
// then use a cover photo for each of the galleries
// use gallery photos as links to gallery/photos page

const GalleryPage = ({data}) => {
  return (
    <Layout>
      <h2>Gallery</h2>
      {data.allDirectory.nodes.map((item, index) => (
        <section key={index} >
          {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          {data.allFile.edges.map((image, index) => (
            <Img 
              key={index}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
            />
          ))}
        </section>
      ))}
    </Layout>
  )
}
export default GalleryPage