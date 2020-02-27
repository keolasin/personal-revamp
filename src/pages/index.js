import React from "react"
import { graphql, Link } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BodyText = styled.p`
  font-family: 'Forma DJR Display', sans-serif;
  font-size: 2em;
  line-height: 1.5em;
`;

const Emphasis = styled.strong`
  font-size: 2em;
  font-weight: bold;
  color: #798BE4;
`;

const AltEmphasis = styled.strong`
  color: #BC9612;
  font-weight: bold;
  font-size: 2em;
`;

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Home</h1>
    <BodyText>I'm a web developer in <Emphasis>San Francisco</Emphasis>, who grew up in <AltEmphasis>Arizona</AltEmphasis> and still loves the heat. You can find me climbing, running, or riding on the weekends or behind a camera lens.</BodyText>
  </Layout>
)

export default IndexPage
