import React from "react";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { mediaQuery, colors } from "../styles/global";

const Header = ({ children }) => {
	return <StyledHeader>{children}</StyledHeader>;
};

export default Header;

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

const StyledHeader = styled.h1`
	border-radius: 25px;
	font-family: "astounder-squared-bb", sans-serif;
	color: ${colors.primaryColor};
	font-size: 1.4rem;
	background-color: rgba(0, 0, 0, 0.75);
	display: inline-block;
	padding: 0 20px;
	margin: 10px;
	${mediaQuery[1]} {
		font-size: 1.8rem;
	}
	${mediaQuery[4]} {
		font-size: 2.3rem;
	}
`;
