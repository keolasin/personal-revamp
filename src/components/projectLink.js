import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery } from '../styles/global.js'

const ProjectLink = ({ project }) => (
    <section>
        <Project to={project.frontmatter.slug}>
            <Bold>{project.frontmatter.title}</Bold>
            <Date>{project.frontmatter.date}</Date>
        </Project>
        <Excerpt>{project.excerpt}</Excerpt>
        <Thumbnail href={project.frontmatter.link}>Live site</Thumbnail>
    </section>
)

export default ProjectLink;

const Base = css`
    font-family: 'astounder-squared-bb';
`;

const Bold = styled.strong`
    ${Base}
    font-size: 1.4em;
    font-weight: bold;
    color: #798BE4;
    ${mediaQuery[1]} {
        font-size: 2.0rem;
    }
    ${mediaQuery[4]} {
        font-size: 2.4rem;
    }
    :hover {
        color: #BC9612;
    }
    :focus {
        color: #798BE4;
    }
    :active {
        color: #798BE4;
    }
`;

const Date = styled.strong`
    ${Base}
    color: #BC9612;
    font-weight: bold;
    font-size: 1.2rem;
    margin: auto 10px;
`;

const Project = styled(Link)`
    font-family: 'Roboto';
    line-height: 1.5em;
    text-decoration: none;
    display: inline-block;
    color: #DBE7FB;
    cursor: pointer;
    ${mediaQuery[1]} {
        font-size: 2rem;
    }
    ${mediaQuery[4]} {
        font-size: 2.5rem;
    }
`;

const Thumbnail = styled(Project)`
`;

const Excerpt = styled.p`
    font-family: 'Roboto';
    font-size: 1.2rem;
    text-decoration: none;
    display: inline-block;
    color: #DBE7FB;
    margin-bottom: 0px;
    ${mediaQuery[1]} {
        font-size: 1.4rem;
    }
    ${mediaQuery[4]} {
        font-size: 1.6rem;
    }
`;