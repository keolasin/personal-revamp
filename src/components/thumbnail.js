import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Thumbnail = (props) => {
    const galleryCoverQuery = graphql`
        query galleryCoverQuery($filter: MarkdownRemarkFilterInput, $limit: Int) {
            allFile() {
                edges {
                node {
                    id
                    name
                    base
                    childImageSharp {
                    fluid {
                        src
                        originalName
                    }
                    }
                }
                }
            }
        }
    `

    return (
        <div>
            {galleryImagesQuery.allFile.edges.map((image, index) => (
                <Img
                    key={index}
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
                />
            ))}
        </div>
    )
}

export default Thumbnail
