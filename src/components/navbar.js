import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Container = styled.nav`
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
  justify-self: left;
  font-size: 72px;
`;
const linkStyle = css`
  ${base}
  font-size: 50px;
  align-self: center;
  justify-self: right;
`;


const NavBar = () => (
  <Container>
    <Link css={homeLink} to="/">Matthew Reyes</Link>
    <Link css={linkStyle} to="/Gallery/">Photos</Link>
    <Link css={linkStyle} to="/Projects/">Projects</Link>
    <Link css={linkStyle} to="/Contact/">Contact</Link>
  </Container>
)

export default NavBar
