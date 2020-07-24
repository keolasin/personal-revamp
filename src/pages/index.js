import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { mediaQuery } from "../styles/global.js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ToggleButton from "../components/toggleButton.js"

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
        <ToggleButton/>
        <BlurbImage
          fluid={portrait.file.childImageSharp.fluid}
          alt="Yours truly"
        />
        <BodyText>Hello, I'm <AltEmphasis>Matthew Reyes.</AltEmphasis> I live in <Emphasis>San Francisco.</Emphasis><br/>Check out my photos or some of the projects I've done.</BodyText>
      </Container>
    </Layout>
  )
}

export default IndexPage

// css styling
const Container = styled.section`
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.75);
  height: 100%;
  display: grid;
  place-items: center;
  transition: 1s ease 0.3s;
`;

const BlurbImage = styled(Img)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 10px auto;
  ${mediaQuery[0]} {
    width: 125px;
    height: 125px;
  }
  ${mediaQuery[1]} {
    width: 150px;
    height: 150px;
  }
  ${mediaQuery[2]} {
    width: 175px;
    height: 175px;
    display: flex;
    place-items: flex-start;
  }
  ${mediaQuery[3]} {
    width: 200px;
    height: 200px;
    display: flex;
  }
  ${mediaQuery[4]} {
    width: 225px;
    height: 225px;
    display: flex;
  }
`

const BodyText = styled.p`
  border-radius: 25px;
  color: #DBE7FB;
  font-family: 'acumin-pro', sans-serif;
  line-height: 1.2em;
  font-size: 1rem;
  padding: 15px;
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