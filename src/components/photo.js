import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

export const query = graphql`
    query($slug: String!) {
        imageSharp(fields: { slug: { eq: $slug } }) {
            fluid {
                originalImg
                originalName
            }
        }
    }
`;

export default ({ data }) => {
    const photo = data.imageSharp;
    
    return (
        <Layout>
            <section>
            <p>{photo.fluid.originalName}</p>
            </section>
        </Layout>
    )
}