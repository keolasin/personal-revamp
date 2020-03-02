import React from "react"

import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const portrait = useStaticQuery(graphql`
    query {
      file(childImageSharp: {}, name: {eq: "portrait"}) {
        childImageSharp {
          fluid( srcSetBreakpoints: [320, 480, 768, 992, 1200] ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Layout>
      
      <BlurbImage
        fluid={data.file.childImageSharp.fluid}
        alt="Yours truly"
      />
      <Container>
        <BodyText>I'm a web developer in <Emphasis>San Francisco</Emphasis>, who grew up in <AltEmphasis>Arizona</AltEmphasis> and still loves the heat. You can find me climbing, running, or riding on the weekends or behind a camera lens.</BodyText>
      </Container>
    
    </Layout>
  )
}

export default IndexPage



// css styling
const Container = styled.section`

`;

const BlurbImage = styled(Img)`
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin: 10px auto;
  ${mediaQuery[0]} {
    width: 275px;
    height: 275px;
  }
  ${mediaQuery[1]} {
    width: 300px;
    height: 300px;
  }
  ${mediaQuery[2]} {
    width: 325px;
    height: 325px;
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

const BodyText = styled.p`
  margin: 10px auto;
  font-family: 'Forma DJR Display', sans-serif;
  font-size: 0.65em;
  line-height: 1.5em;
`;

const Emphasis = styled.strong`
  font-size: 1em;
  font-weight: bold;
  color: #798BE4;
`;

const AltEmphasis = styled.strong`
  color: #BC9612;
  font-weight: bold;
  font-size: 1em;
`;