import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled from "@emotion/styled"
import { mediaQuery } from "../styles/global.js"

import Gallery from "./gallery.js"

import Layout from "../components/layout"

// data query
// context passed from gatsby-node.js file generation:
// albumID: node.id
export const query = graphql`
    query($albumID: String!) {
        markdownRemark(id: {eq: $albumID}) {
            frontmatter {
                title
                date
                photographer
                description
            }
            children {
                ... on File {
                    id
                    name
                    childImageSharp {
                        fluid(maxWidth: 3000) {
                            ...GatsbyImageSharpFluid_withWebp
                            originalName
                        }
                    }
                }
            }
        }
    }
`;

// component
export default ({ data, location }) => {
    const album = data.markdownRemark;
    const photos = data.markdownRemark.children;
    
    return (
        <Layout>
            <AlbumHeader>{album.frontmatter.title}
                <Description>{album.frontmatter.description}</Description>
            </AlbumHeader>
            
            <Gallery>
                {photos.map( (image, index) => (
                    <ImageLink key={index} to={decodeURIComponent(image.name).replace(' ', '-')}>
                        <ImageTile
                            fluid={image.childImageSharp.fluid}
                            title={image.childImageSharp.fluid.originalName}
                        />
                        <span id={image.name} />
                        
                        <Hover>
                            {<PhotoText>{decodeURIComponent(image.name)}</PhotoText>}   
                        </Hover>
                                             
                    </ImageLink>
                ))}
            </Gallery>
        </Layout>
    )
}

const ImageLink = styled(Link)`
    position: relative;
    overflow: hidden;
    cursor: pointer;
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

const AlbumHeader = styled.h2`
    border-radius: 25px;
    font-family: 'astounder-squared-bb', sans-serif;
    color: #BC9612;
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

const Description = styled.p`
    font-family: 'acumin-pro', sans-serif;
    color: #DBE7FB;
    font-size: 1rem;
    padding: 0 20px;
    margin: 10px;
    ${mediaQuery[1]} {
        font-size: 1.2rem;
    }
    ${mediaQuery[4]} {
        font-size: 1.6rem;
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
    border-radius: 25px;
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

const ImageTile = styled(Img)`
    width: 100%;
    height: 100%;
    border-radius: 25px;
`;