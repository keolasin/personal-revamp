/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

// gatsby
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

// styling imports
import styled from "@emotion/styled"

const Background = ({ children, className }) => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(name: {eq: "Deserts-1"}) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      desktopImage: file(name: {eq: "Deserts-2"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 1200px)`
    }
  ];

  return (
    <BackgroundImage
      fluid={sources}
      Tag={`section`}
      className={className}
    >
      {children}
    </BackgroundImage>
  )
}

// css styling
const ArtBackground = styled(Background)`
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
`;

export default ArtBackground
