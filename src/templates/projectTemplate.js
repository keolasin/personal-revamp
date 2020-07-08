import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// ../components
import Layout from "../../components/layout"
import SEO from "../../components/seo"


// styling imports
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { mediaQuery, base } from '../styles/global.js'

// query
/*export const templateQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }){
            html
            frontmatter {
                date( formatString: "MMMM DD, YYYY")
                slug
                title
            }
        }
    }
`;
*/
function Template( {data} ){
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    
    return (
        <>
            <h1>{frontmatter.title}</h1>
        </>
    )
}

export default Template