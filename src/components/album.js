import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"

// data query
export const query = graphql`
    query($slug: String!) {
        imageSharp(fields: { slug: { eq: $slug } }) {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

// component
export default ({ data }) => {
    const photo = data.imageSharp;

    return (
        <Layout>
            <section>
                <Img
                    fluid={photo.fluid}
                    alt={photo.fluid.originalName}
                />
            </section>
        </Layout>
    )
}