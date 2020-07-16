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
          fluid (quality: 100) {
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
          <BodyText>Email or find me on social media<br/>
            <Email href="mailto:Matthew@mreyes.info?Subject=Hi%20Matt">Matthew@mreyes.info</Email><br/>      
            <Social href="https://github.com/keolasin">Github </Social>
            <span />
            <Social href="https://www.linkedin.com/in/reyesmatthew/">LinkedIn </Social>
            <Social href="https://www.instagram.com/keolasin/">Instagram</Social>
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
  display: grid;
  place-items: center;
  transition: 1s ease 0.3s;
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
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  color: #DBE7FB;
  font-family: 'acumin-pro', sans-serif;
  line-height: 1.5em;
  font-size: 1.2rem;
  padding: 15px;
  ${mediaQuery[1]} {
      font-size: 1.7rem;
  }
  ${mediaQuery[4]} {
      font-size: 2rem;
  }
`;

const Social = styled.a`
  font-family: 'astounder-squared-bb', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #798BE4;
  text-decoration: none;
  :hover {
    color: #BC9612;
  }
  :focus {
    color: #798BE4;
  }
  :active {
    color: #798BE4;
  }
  ${mediaQuery[1]} {
      font-size: 2rem;
  }
  ${mediaQuery[4]} {
      font-size: 2.5rem;
  }
`;

const Email = styled(Social)`
  color: #BC9612;
  font-size: 1.6rem;
  :hover {
    color: #DBE7FB;
  }
  :focus {
    color: #798BE4;
  }
  :active {
    color: #798BE4;
  }
  ${mediaQuery[1]} {
      font-size: 2.4rem;
  }
  ${mediaQuery[4]} {
      font-size: 3rem;
  }
`;