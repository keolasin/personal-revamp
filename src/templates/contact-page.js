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
    query ContactPageQuery {
        markdownRemark( frontmatter: { templateKey: { eq: "contact-page" } }) {
            html
            frontmatter {
                title
                heading
                thumbnailImg
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

export const ContactPageTemplate = ({
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
            <BodyText dangerouslySetInnerHTML={{ __html: body }}/>
        </Container>
	);
};

const ContactPage = ({ data }) => {
    const { frontmatter, html, thumbnailImg } = data.markdownRemark;
    
    // templateKey, title, thumbnailImg, heading, body
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <ContactPageTemplate
                image={thumbnailImg.childImageSharp.fluid}
                title={frontmatter.title}
                heading={frontmatter.heading}
                body={html}
            >
            </ContactPageTemplate>
        </Layout>
    )
}

export default ContactPage;

// css styling
const SocialLink = css`
    text-decoration: none;
    color: #798be4;
    -webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: black;
    font-size: 1.2rem;
	:hover {
		color: #dbe7fb;
	}
	:focus {
		color: #bc9612;
	}
	:active {
		color: #bc9612;
	}
	${mediaQuery[2]} {
		font-size: 2rem;
	}
	${mediaQuery[4]} {
		font-size: 2.4rem;
	}
`;

const Email = css`
    ${SocialLink}
	color: #bc9612;
    font-size: 1.6rem;
    :hover {
		color: #dbe7fb;
	}
	:focus {
		color: #798be4;
	}
	:active {
		color: #798be4;
	}
    ${mediaQuery[2]} {
		font-size: 2.4rem;
	}
	${mediaQuery[4]} {
		font-size: 2.6rem;
	}
`;

const H2 = css`
    border-radius: 25px;
    font-family: "acumin-pro", sans-serif;
    padding: 5px;
    margin: auto 0;
    margin-bottom: 0;
    max-width: 1000px;
    font-size: 1rem;
    color: #dbe7fb;
    ${mediaQuery[2]} {
        font-size: 1.2rem;
    }
    ${mediaQuery[4]} {
        font-size: 1.4rem;
    }
`;

const BodyText = styled.article`
    h2 {
        ${H2}
    }
    a {
        ${SocialLink}
        :first-child {
            ${Email}
        }
    }
    max-width: 80%;
`;
