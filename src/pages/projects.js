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
        <Project href="https://github.com/keolasin/grocery-todo"><Emphasis>Grab n' Grocer</Emphasis> An app for users to create shared grocery lists and update them in real-time</Project>
        <Project href="https://keolasin-greenlete.herokuapp.com"><Emphasis>Greenlete</Emphasis> An app for users to log litter they find and pick-up during a workout</Project>
        <Project href="https://github.com/keolasin/bloc-jams-react"><Emphasis>Music Player</Emphasis> An app for playing music</Project>
        <Project href="https://github.com/keolasin/bloc-chat-react"><Emphasis>Chatroom</Emphasis> A chatroom app</Project>
        <Project href="https://keolasin-bloccit.herokuapp.com/"><Emphasis>RedditClone</Emphasis> A place for users to share and upvote stories</Project>
        <Project href="https://keolasin-blocipedia.herokuapp.com"><Emphasis>Wiki Clone</Emphasis> A wiki-topic clone</Project>
        <Project href="https://repl.it/@keolasin"><Emphasis>Repl Practice</Emphasis> A collection of practice problems, algorithms, and data structures</Project>
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
  font-family: 'Roboto';
  line-height: 1.5em;
  font-size: 1.2rem;
  text-decoration: none;
  display: inline-block;
  margin: 20px auto;
  color: #DBE7FB;
  ${mediaQuery[1]} {
      font-size: 2rem;
  }
  ${mediaQuery[4]} {
      font-size: 2.5rem;
  }
  :hover {
    color: #798BE4;
  }
  :focus {
    color: #BC9612;
  }
  :active {
    color: #BC9612;
  }
`;

const Emphasis = styled.strong`
  font-family: 'Astounder Squared BB';
  font-size: 1.4em;
  font-weight: bold;
  color: #798BE4;
  ${mediaQuery[1]} {
      font-size: 2.2rem;
  }
  ${mediaQuery[4]} {
      font-size: 2.8rem;
  }
`;

const AltEmphasis = styled.strong`
  color: #BC9612;
  font-weight: bold;
  font-size: 1em;
`;