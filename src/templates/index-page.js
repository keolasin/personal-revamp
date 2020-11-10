import { React } from "react";

import { graphql } from "gatsby";

// styling
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { mediaQuery, Container, BlurbImage } from "../styles/global.js";

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
            }
            childrenFile {
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
    const { frontmatter, html } = data.markdownRemark;
    const { childImageSharp } = data.markdownRemark.childrenFile[0];
    
    // templateKey, title, thumbnailImg, heading, body
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <IndexPageTemplate
                image={childImageSharp.fluid}
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
	color: #798be4;
`;

const AltEmphasis = css`
	color: #bc9612;
	font-weight: bold;
	font-size: 1em;
`;

const BodyText = styled.article`
    h2 {
        border-radius: 25px;
        color: #dbe7fb;
        font-family: "acumin-pro", sans-serif;
        line-height: 1.2em;
        font-size: 1rem;
        padding: 5px;
        margin: auto 0;
        ${mediaQuery[2]} {
            font-size: 1.2rem;
            margin: 10px;
        }
        ${mediaQuery[4]} {
            font-size: 1.7rem;
        }
    }
    strong {
        ${Emphasis}
    }
    em {
        ${AltEmphasis}
    }
`;
