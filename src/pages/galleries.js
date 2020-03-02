import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"



// query for the cover photos of each album, along with the name of each album to appear on the galleries page
export const galleryCoverQuery = graphql`
  query {
    allFile(filter: {name: {glob: "*Cover"}, relativeDirectory: {glob: "galleries/*"}}) {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
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
      {covers.map((item, index) => (
        <section key={index}>
          <a href={`${item.relativeDirectory.replace('galleries/','')}`}>
            {item.relativeDirectory.replace('galleries/','').charAt(0).toUpperCase() + item.name.slice(1)}
            <Img 
              fluid={item.childImageSharp.fluid}
              alt={item.childImageSharp.fluid.originalName}
            />
          </a>
        </section>
      ))}
    </Layout>
  )
}
export default GalleriesPage