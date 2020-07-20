import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"

const AlbumCover = ({ album }) => {
    return (
        <Container to={album.frontmatter.title.toLowerCase()}>
            <CoverImage 
                fluid={album.coverImg.childImageSharp.fluid}
                alt={album.frontmatter.title}
            />
            <Hover>
                <PhotoText>
                    {album.frontmatter.title}
                </PhotoText>
            </Hover>
        </Container>
    )
}

export default AlbumCover;

const Container = styled(Link)`
    position: relative;
    overflow: hidden;
    cursor: pointer;
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

const Hover = styled.section`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: black;
    :hover {
        opacity: 0.8;
    }
`;

const PhotoText = styled.p`
    color: #DBE7FB;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    line-height: 3rem;
`;

const CoverImage = styled(Img)`
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;