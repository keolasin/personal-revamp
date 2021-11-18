import { React } from "react";

import { graphql } from "gatsby";

// styling
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { mediaQuery, Container, BlurbImage, colors } from "../styles/global.js";

// components
import Layout from "../components/layout";
import SEO from "../components/seo";

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark( frontmatter: { templateKey: { eq: "index-page" } }) {
            html
            frontmatter {
                title
                heading
                thumbnailImg
                videoURL
            }
            thumbnailImg {
                childImageSharp {
                    fluid (maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    }
`;

export const IndexPageTemplate = ({
    title,
    image,
    heading,
    body
}) => {
	return (
        <Container>
            <BlurbImage
                fluid={image}
                alt="Yours truly"
            />
            <BodyText dangerouslySetInnerHTML={{ __html: body }} />
        </Container>
	);
};

const IndexPage = ({ data }) => {
    const { frontmatter, html, thumbnailImg } = data.markdownRemark;
    
    // templateKey, title, thumbnailImg, heading, body
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <IndexPageTemplate
                image={thumbnailImg.childImageSharp.fluid}
                title={frontmatter.title}
                heading={frontmatter.heading}
                body={html}
            />
        </Layout>
    )
}

export default IndexPage;

// css styling
const Emphasis = css`
	font-size: 1em;
	font-weight: bold;
	color: ${colors.secondaryColor};
`;

const AltEmphasis = css`
	color: ${colors.primaryColor};
	font-weight: bold;
	font-size: 1em;
`;

const BodyText = styled.article`
    max-width: 80%;
    h2 {
        border-radius: 25px;
        color: ${colors.tertiaryColor};
        font-family: "acumin-pro", sans-serif;
        line-height: 1.2em;
        font-size: 1rem;
        padding: 5px;
        margin: auto 0;
        max-width: 1000px;
        ${mediaQuery[2]} {
            font-size: 1.4rem;
            margin: 10px;
        }
        ${mediaQuery[4]} {
            font-size: 2rem;
        }
    }
    strong {
        ${Emphasis}
    }
    em {
        ${AltEmphasis}
    }
`;
