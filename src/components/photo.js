import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"

// data query
export const query = graphql`
    query($slug: String!) {
        file(childImageSharp: {fields: {slug: {eq: $slug}}}) {
            relativeDirectory
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    originalName
                }
            }
        }
    }
`;

// component
export default ({ data }) => {
    const photo = data.file.childImageSharp;
    const refLink = data.file.relativeDirectory;

    return (
        <Layout>
            <section>
                <Link to={`/${refLink}`}>
                    <Img
                        fluid={photo.fluid}
                        alt={photo.fluid.originalName}
                    />
                </Link>
            </section>
        </Layout>
    )
}