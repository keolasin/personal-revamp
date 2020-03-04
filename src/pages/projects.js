import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

// styling imports
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'

const ProjectPage = () => (
  <Layout>
    <SEO title='projects'/>
    <Container>
      
    </Container>
  </Layout>
)

export default ProjectPage

// css styling
const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;

const BodyText = styled.p`
  color: #DBE7FB;
  font-family: 'Forma DJR Display', sans-serif;
  line-height: 1.5em;
  font-size: 1.5rem;
  ${mediaQuery[1]} {
      font-size: 1.8rem;
  }
  ${mediaQuery[4]} {
      font-size: 2.3rem;
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