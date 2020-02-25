/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import "./layout.css"

// CSS using @emotion, using styled.div and css prop
const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  max-width: 66%;
  margin: 0 auto;
`;

const base = css`
  font-family: 'Astounder Squared BB', sans-serif;
`;

const homeLink = css`
  ${base}
  justify-self: center;
  font-size: 72px;
`;
const linkStyle = css`
  ${base}
  font-size: 50px;
  align-self: center;
  justify-self: center;
`;

const Layout = ({children}) => {
  // graphQL query for site config
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // site layout HTML
  return (
    <>
      <NavBar>
        <Link css={homeLink} to="/">MReyes</Link>
        <Link css={linkStyle} to="/gallery/">Photos</Link>
        <Link css={linkStyle} to="/projects/">Projects</Link>
        <Link css={linkStyle} to="/contact/">Contact</Link>
      </NavBar>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
