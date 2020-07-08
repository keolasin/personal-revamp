import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery } from '../styles/global.js'

const ProjectLink = ({ project }) => (
    <Container>
        <Project to={project.frontmatter.title}>
            <Thumbnail fluid={project.image.childImageSharp.fluid} alt ={project.frontmatter.imageAlt} />
            <Bold>{project.frontmatter.title}</Bold>
            <Date>{project.frontmatter.date}</Date>
            <Excerpt>{project.excerpt}</Excerpt>
        </Project>
    </Container>
)

export default ProjectLink;

const Base = css`
    font-family: 'astounder-squared-bb';
    margin: 5px auto;
`;

const Container = styled.section`
    background-color: rgba(0, 0, 0, 0.75);
    width: 95%;
    margin: 5px auto;
    border-radius: 25px;
    box-shadow: 0 4px 8px 0 rgba(121, 139, 228, 0.2), 0 6px 20px 0 rgba(121, 139, 228, 0.15);
    :hover {
        box-shadow: 0 4px 8px 0 rgba(121, 139, 228, 0.4), 0 6px 20px 0 rgba(121, 139, 228, 0.35);
    }
    :focus {
        box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4), 0 6px 20px 0 rgba(188, 150, 18, 0.35);
    }
    :active {
        box-shadow: 0 4px 8px 0 rgba(188, 150, 18, 0.4), 0 6px 20px 0 rgba(188, 150, 18, 0.35);
    }
`;

const Bold = styled.strong`
    ${Base}
    font-size: 1.4em;
    font-weight: bold;
    color: #798BE4;
    margin-left: 5px;
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
    font-family: 'acumin-pro', sans-serif;
    text-decoration: none;
    color: #DBE7FB;
    cursor: pointer;
    ${mediaQuery[1]} {
        font-size: 2rem;
    }
    ${mediaQuery[4]} {
        font-size: 2.5rem;
    }
`;

const Excerpt = styled.p`
    font-family: 'acumin-pro', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    display: inline-block;
    color: #DBE7FB;
    margin-bottom: 0px;
    margin: 10px;
    ${mediaQuery[1]} {
        font-size: 1.4rem;
    }
    ${mediaQuery[4]} {
        font-size: 1.6rem;
    }
`;

const Thumbnail = styled(Img)`
    max-width: 100%;
    margin: 4px auto;
    max-height: 200px;
    border-radius: 25px 25px 0 0;
    object-fit: contain;
`;