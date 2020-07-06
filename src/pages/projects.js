import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// ../components
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectLink from "../components/projectLink"


// styling imports
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'

// query for projects
export const projectsQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }){
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter{
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            link
          }
        }
      }
    }
  }
`;

const ProjectPage = ({
  data: {
      allMarkdownRemark: {edges},
  },
}) => {
  
  const Projects = edges
    .map(edge => <ProjectLink key={edge.node.id} project={edge.node} />)

  return (
    <Layout>
      <SEO title='projects'/>
      <Container>
          {Projects}
      </Container>
    </Layout>
  )
}

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