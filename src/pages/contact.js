import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// styling imports
import styled from "@emotion/styled"
import { mediaQuery } from '../styles/global.js'

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
      <Container>
        <BlurbImage
          fluid={data.file.childImageSharp.fluid}
          alt="Cup of coffee with succulent"
        />
          <BodyText>Email or find me on social media</BodyText>
          <BodyText>
            <Social style={{color: '#BC9612'}}href="mailto:Matthew@mreyes.info?Subject=Hi%20Matt">Matthew@mreyes.info</Social>
          </BodyText>
          <BodyText>
            <Social href="https://github.com/keolasin"> Github </Social>
            <Social href="https://www.linkedin.com/in/reyesmatthew/">LinkedIn</Social>
          </BodyText>
      </Container>
    </Layout>
  )
}

export default ContactPage

// css styling
const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
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
  line-height: 1.5em;
  font-size: 1.2rem;
  ${mediaQuery[1]} {
      font-size: 1.7rem;
  }
  ${mediaQuery[4]} {
      font-size: 2rem;
  }
`;

const Social = styled.a`
  font-family: 'astounder-squared-bb';
  font-size: 1.4em;
  font-weight: bold;
  color: #798BE4;
  text-decoration: none;
  ${mediaQuery[1]} {
      font-size: 2.4rem;
  }
  ${mediaQuery[4]} {
      font-size: 3rem;
  }
`;