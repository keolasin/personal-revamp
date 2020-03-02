import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'

const NavBar = () => {
  // site layout HTML
  return (
      <Container>
        <Link 
            css={homeLink} 
            to="/" 
            activeStyle={{ color: '#BC9612' }}
        >
            MReyes
        </Link>

        <Link 
            css={linkStyle} 
            style={{gridArea: 'photos'}} 
            to="/galleries/" 
            activeStyle={{ color: '#BC9612' }} 
            partiallyActive={true}
        >
            Photos
        </Link>

        <Link 
            css={linkStyle} 
            style={{gridArea: 'projects'}} 
            to="/projects/" 
            activeStyle={{ color: '#BC9612' }} 
            partiallyActive={true}
        >
            Projects
        </Link>

        <Link 
            css={linkStyle} 
            style={{gridArea: 'contact'}} 
            to="/contact/" 
            activeStyle={{ color: '#BC9612' }} 
            partiallyActive={true}
        >
            Contact
        </Link>
      </Container>
  )
}

export default NavBar



// Styling
// media query breakpoints array = [320, 480, 768, 992, 1200];
const Container = styled.nav`
  ${base}
  width: 100%;
  margin: 6px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    ". home ."
    "photos projects contact";
  a {
    color: #DBE7FB;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }
  a:hover {
    color: #798BE4;
  }
  a:focus {
    color: #BC9612;
  }
  a:active {
    color: #BC9612;
  }
  ${mediaQuery[4]} {
    margin: 15px auto;
    background-color: purple;
    width: 80%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "home photos projects contact";
  }
`;

const homeLink = css`
  ${base}
  font-size: 1.8rem;
  grid-area: home;
  ${mediaQuery[0]} {
    font-size: 1.8rem;
  }
  ${mediaQuery[1]} {
    font-size: 2rem;
  }
  ${mediaQuery[2]} {
    font-size: 2.3rem;
    margin: 6px auto;
  }
  ${mediaQuery[3]} {
    font-size: 2.5rem;
    margin: 6px auto;
  }
  ${mediaQuery[4]} {
    font-size: 3.5rem;
    text-align: left;
  }
`;

const linkStyle = css`
  ${base}
  font-size: 1.4rem;
  ${mediaQuery[0]} {
    font-size: 1.4rem;
  }
  ${mediaQuery[1]} {
    font-size: 1.6rem;
  }
  ${mediaQuery[2]} {
    font-size: 1.8rem;
  }
  ${mediaQuery[3]} {
    font-size: 2rem;
  }
  ${mediaQuery[4]} {
    font-size: 2.5rem;
    text-align: right;
  }
`;


