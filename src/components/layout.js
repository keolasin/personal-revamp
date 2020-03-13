/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// styling imports
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'
import "./layout.css"

// components
import ArtBackground from "./background.js"
import NavBar from "./navbar.js"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  // site layout HTML
  return (
    <ArtBackground>
      <NavBar />
      <main css={main}>
        {children}
      </main>
    </ArtBackground>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// css
const main = css`
  ${base}
  overflow: auto;
  ${mediaQuery[2]} {
    width: 95%;
  }
  ${mediaQuery[3]} {
    width: 90%;
  }
  ${mediaQuery[4]} {
    width: 80%;
  }
`;