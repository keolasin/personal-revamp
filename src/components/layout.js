/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

// styling imports
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { mediaQuery, base } from "../styles/global.js";
import "./layout.css";

// components
import Video from "./video.js";
import NavBar from "./navbar.js";

if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children }) => {
	// site layout HTML
	return (
		<>
			<Video />
			<BackupImage />
			<NavBar />
			<main css={main}>{children}</main>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;

// css
const main = css`
	${base}
	overflow-y: auto;
	height: 85vh;
	scrollbar-width: none;
	-ms-verflow-style: none;
	::-webkit-scrollbar {
		display: none;
	}
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

const BackupImage = styled.div`
	position: fixed;
	min-height: 100vh;
	width: 100vw;
    z-index: -1;
    background: url("https://res.cloudinary.com/keolasin/image/upload/t_mreyes_default/v1597267956/Desert/Joshua_Tree_Climbing.jpg") center;
	background-size: cover;
    ${mediaQuery[2]} {
		display: none;
    }
 `;
