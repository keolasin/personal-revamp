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
        <BodyText><Project href="https://github.com/keolasin/grocery-todo">Grab n' Grocer</Project>An app for users to create shared grocery lists and update them in real-time</BodyText>
        <BodyText><Project href="https://keolasin-greenlete.herokuapp.com">Greenlete</Project>An app for users to log litter they find and pick-up during a workout</BodyText>
        <BodyText><Project href="https://github.com/keolasin/bloc-jams-react">Music Player</Project>An app for playing music</BodyText>
        <BodyText><Project href="https://github.com/keolasin/bloc-chat-react">Chatroom</Project>A chatroom app</BodyText>
        <BodyText><Project href="https://keolasin-bloccit.herokuapp.com/">RedditClone</Project>A place for users to share and upvote stories</BodyText>
        <BodyText><Project href="https://keolasin-blocipedia.herokuapp.com">Wiki Clone</Project>A wiki-topic clone</BodyText>
        <BodyText><Project href="https://repl.it/@keolasin">Repl Practice</Project>A collection of practice problems, algorithms, and data structures</BodyText>
    </Container>
  </Layout>
)

export default ProjectPage

// css styling
const Container = styled.article`
  width: 100%;
  height: 100%;
  max-height: 90vh;
  text-align: left;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Project = styled.a`
  text-decoration: none;
  display: inline-block;
  margin: 5px;
  font-size: 1.5em;
  font-weight: bold;
  color: #798BE4;
`;

const BodyText = styled.p`
  color: #DBE7FB;
  font-family: 'Forma DJR Display', sans-serif;
  line-height: 1.5em;
  font-size: 1.2rem;
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