/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// gatsby
import { useStaticQuery, graphql } from "gatsby"

// styling imports
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'


const Background = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Background

// css styling
const Container = styled.div`
    height: 100%;
`;
