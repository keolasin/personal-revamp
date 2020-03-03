import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// styling imports
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(childImageSharp: {}, name: {eq: "coffee"}) {
        childImageSharp {
          fluid {
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
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin: 10px auto;
  ${mediaQuery[0]} {
    width: 225px;
    height: 225px;
  }
  ${mediaQuery[1]} {
    width: 250px;
    height: 250px;
  }
  ${mediaQuery[2]} {
    width: 300px;
    height: 300px;
  }
  ${mediaQuery[3]} {
    width: 400px;
    height: 400px;
  }
  ${mediaQuery[4]} {
    width: 500px;
    height: 500px;
    margin: 0 auto;
  }
`
