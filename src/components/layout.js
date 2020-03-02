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
import NavBar from "./navbar.js"

const Layout = ({ children }) => {
  // site layout HTML
  return (
    <>
      <NavBar />
      <main css={base}>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
