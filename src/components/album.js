import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "./layout"

// data query
export const query = graphql`
    query($slug: String!) {
        directory(fields: { slug: { eq: $slug } }) {
            name
        }
    }
`;

// component
export default ({ data }) => {
    const album = data.directory;

    return (
        <Layout>
            <section>
                {album.name.charAt(0).toUpperCase()+album.name.slice(1)}
            </section>
        </Layout>
    )
}