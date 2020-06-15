import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { mediaQuery } from '../styles/global.js'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const portrait = useStaticQuery(graphql`
    query {
      file( name: {eq: "portrait"}) {
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
      <SEO title='home'/>
      <Container>
        <BlurbImage
          fluid={portrait.file.childImageSharp.fluid}
          alt="Yours truly"
        />
        <BodyText><AltEmphasis>Hello, I'm Matthew.</AltEmphasis>I live in <Emphasis>San Francisco</Emphasis>.</BodyText>
        <BodyText>Check out my <AltEmphasis>photos</AltEmphasis> or some of the <Emphasis>work</Emphasis> I've done.</BodyText>
      </Container>
    </Layout>
  )
}

export default IndexPage

// css styling
const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  transition: 1s ease 0.3s;
  :hover {
    opacity: 0;
    cursor: no-drop;
  }
`;

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
    width: 350px;
    height: 350px;
  }
  ${mediaQuery[4]} {
    width: 450px;
    height: 450px;
  }
`

const BodyText = styled.p`
  color: #DBE7FB;
  font-family: 'Roboto', sans-serif;
  line-height: 1.2em;
  font-size: 1rem;
  padding: 10px 0;
  margin-bottom: 0px;
  ${mediaQuery[1]} {
      font-size: 1.5rem;
  }
  ${mediaQuery[4]} {
      font-size: 1.7rem;
      margin: 0 20px;
  }
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