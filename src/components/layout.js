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
import { Link } from "gatsby"

// styling imports
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'
import "./layout.css"

// components
import Background from "./background.js"
import NavBar from "./navbar.js"

const Layout = ({ children }) => {
  // site layout HTML
  return (
    <Background>
      <NavBar />
      <main css={main}>{children}</main>
    </Background>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// css
const main = css`
  ${base}
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "image"
    "description";
  ${mediaQuery[0]} {
    width: 100%;
  }
  ${mediaQuery[1]} {
    width: 100%;
  }
  ${mediaQuery[2]} {
    width: 95%;
  }
  ${mediaQuery[3]} {
    width: 90%;
  }
  ${mediaQuery[4]} {
    width: 80%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      "image description";
  }
`;