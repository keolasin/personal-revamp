import React from "react";

import { Link } from "gatsby";

import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { mediaQuery, base, colors } from "../styles/global.js";

const NavBar = () => {
	// site layout HTML
	return (
		<Container>
			<Link css={homeLink} to="/" activeStyle={{ color: colors.primaryColor }}>
				MReyes
			</Link>

			<Link
				css={linkStyle}
				style={{ gridArea: "photos" }}
				to="/albums"
				activeStyle={{ color: colors.primaryColor }}
				partiallyActive={true}
			>
				Photos
			</Link>

			<Link
				css={linkStyle}
				style={{ gridArea: "projects" }}
				to="/projects"
				activeStyle={{ color: colors.primaryColor }}
				partiallyActive={true}
			>
				Projects
			</Link>

			<Link
				css={linkStyle}
				style={{ gridArea: "contact" }}
				to="/contact"
				activeStyle={{ color: colors.primaryColor }}
				partiallyActive={true}
			>
				Contact
			</Link>
		</Container>
	);
};

export default NavBar;

// Styling
// media query breakpoints array = [320, 480, 768, 992, 1200];
const Container = styled.nav`
	${base}
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	place-items: center center;
	width: 100%;
	min-height: 10vh;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas:
		". home ."
		"photos projects contact";
	background-color: rgba(0, 0, 0, 0.75);
	border-radius: 25px 25px 0px 0px;
	a {
		color: ${colors.tertiaryColor};
		-webkit-text-stroke-width: 1px;
		-webkit-text-stroke-color: black;
	}
	a:hover {
		color: ${colors.secondaryColor};
	}
	a:focus {
		color: ${colors.primaryColor}};
	}
	a:active {
		color: ${colors.primaryColor};
	}
	${mediaQuery[2]} {
		position: relative;
		top: 0;
		bottom: unset;
		border-radius: 0px 0px 25px 25px;
	}
	${mediaQuery[4]} {
		width: 80%;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: "home photos projects contact";
	}
`;

const homeLink = css`
	${base}
	font-size: 2.2rem;
	grid-area: home;
	margin-top: 5px;
	${mediaQuery[0]} {
		font-size: 2.4rem;
		margin-top: 5px;
	}
	${mediaQuery[1]} {
		font-size: 2.6rem;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	${mediaQuery[2]} {
		font-size: 2.8rem;
		margin-top: 10px;
		margin-bottom: 5px;
	}
	${mediaQuery[3]} {
		font-size: 3rem;
	}
	${mediaQuery[4]} {
		font-size: 3.5rem;
		margin-top: 20px;
		margin-bottom: 22px;
	}
`;

const linkStyle = css`
	${base}
	font-size: 1.8rem;
	${mediaQuery[0]} {
		font-size: 1.8rem;
	}
	${mediaQuery[1]} {
		font-size: 2rem;
	}
	${mediaQuery[2]} {
		font-size: 2.2rem;
	}
	${mediaQuery[3]} {
		font-size: 2.4rem;
	}
	${mediaQuery[4]} {
		font-size: 2.6rem;
	}
`;
