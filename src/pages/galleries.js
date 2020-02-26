import React from "react"
import { graphql, Link } from "gatsby"
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

const GalleriesPage = ({ data, pageContext }) => {
  return (
    <Layout>
      <h2>Gallery</h2>
      {data.allDirectory.nodes.map((item, index) => (
        <section key={index}>
          <Link to={`galleries/${item.name}`}>
            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
          </Link>
        </section>
      ))}
    </Layout>
  )
}
export default GalleriesPage