import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Img from "gatsby-image";

const breakpoints = [320, 480, 768, 992, 1200];
const mediaQuery = breakpoints.map(breakpoint => {
	return `@media (min-width: ${breakpoint}px)`;
});

const colors = {
	primaryColor: "#BC9612",		// yellow
	secondaryColor: "#798be4",		// purple
	tertiaryColor: "#dbe7fb",		// white
};

const base = css`
	font-family: "astounder-squared-bb", sans-serif;
	font-size: 62.5%;
	text-decoration: none;
	text-align: center;
	margin: 0 auto;
	${mediaQuery[0]} {
		font-size: 1rem;
	}
	${mediaQuery[1]} {
		font-size: 1.4rem;
	}
	${mediaQuery[2]} {
		font-size: 1.6rem;
	}
	${mediaQuery[3]} {
		font-size: 1.8rem;
	}
	${mediaQuery[4]} {
		font-size: 3rem;
	}
`;

const Container = styled.section`
	border-radius: 0px 0px 25px 25px;
	background-color: rgba(0, 0, 0, 0.75);
	display: flex;
	flex-flow: column;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	justify-content: center;
	align-items: center;
	${mediaQuery[2]} {
		top: unset;
		bottom: 0;
		border-radius: 25px 25px 0px 0px;
		flex-flow: row;
		justify-content: center;
		align-items: center;
	}
`;

const Date = styled.p`
	${base}
	color: ${colors.primaryColor};
	font-size: 1rem;
	margin: auto 10px;
	text-align: left;
	${mediaQuery[0]} {
		font-size: 1rem;
	}
	${mediaQuery[1]} {
		font-size: 1.1rem;
	}
	${mediaQuery[2]} {
		font-size: 1.2rem;
	}
	${mediaQuery[3]} {
		font-size: 1.3rem;
	}
	${mediaQuery[4]} {
		font-size: 1.4rem;
	}
`;

const BlurbImage = styled(Img)`
	border-radius: 50%;
	object-fit: cover;
	display: none;
	${mediaQuery[0]} {
		width: 125px;
		height: 125px;
	}
	${mediaQuery[1]} {
		width: 150px;
		height: 150px;
	}
	${mediaQuery[2]} {
		width: 125px;
		height: 125px;
		display: inline-block;
	}
	${mediaQuery[3]} {
		width: 175px;
		height: 175px;
	}
	${mediaQuery[4]} {
		width: 225px;
		height: 225px;
	}
`;

export { base, mediaQuery, BlurbImage, Container, Date, colors };
