import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// styling imports
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(childImageSharp: {}, name: {eq: "coffee"}) {
        childImageSharp {
          fluid(srcSetBreakpoints: [320, 480, 768, 992, 1200] ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title='contact'/>
      <h1>Contact</h1>
      <BlurbImage
        fluid={data.file.childImageSharp.fluid}
        alt="Cup of coffee with succulent"
      />
      <section>
        <h5>Send me an email at
          <a href="mailto:Matthew@mreyes.info?Subject=Hi%20Matt">Matthew@mreyes.info</a>
        </h5>
        <p>Or, check out my social media below</p>
      </section>

    </Layout>
  )
}

export default ContactPage

// css styling

const BlurbImage = styled(Img)`
  border-radius: 50%;
  max-Width: 275px;
  margin: 0 auto;
`
