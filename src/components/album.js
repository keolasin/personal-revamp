import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"

// data query
export const query = graphql`
    query($slug: String!, $parentAlbum: String!) {
        directory (fields: {slug: {eq: $slug }}) {
            name
        }
        allFile (filter: {relativeDirectory: {eq: $parentAlbum }}) {
            edges {
                node {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

// component
export default ({ data }) => {
    const album = data.directory;
    const photos = data.allFile;
    
    return (
        <Layout>
            <section>
                {album.name.charAt(0).toUpperCase()+album.name.slice(1)}
                {photos.edges.map((image, index) => (
                    <Img
                        key={index}
                        fluid={image.node.childImageSharp.fluid}
                        alt={image.node.childImageSharp.fluid.originalName} // only use section of the file extension with the filename
                    />
                ))}
            </section>
        </Layout>
    )
}