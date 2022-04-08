import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from 'gatsby'
import CodeBlock from '../components/CodeBlock';
import Layout from "../Layouts/index";
import styled from "styled-components";
import AuthorArticle from "../components/AuthorArticle";
import TableOfContents from "../components/TableOfContents";
import ScrollToTop from "../components/ScrollToTop";
import SEO from "../components/SEO";

const components = {
    pre: CodeBlock,
}

const Article = ({ data }) => {

    return (
        <Layout article={true}>
            <SEO
                title={data.mdx.frontmatter.title}
                description={data.mdx.frontmatter.desc}
                type="article"
                slug={data.mdx.fields.slug}
            />
            <StyledContainer>
                <StyledArticle>
                    <AuthorArticle article={data} />
                    <h1>
                        {data.mdx.frontmatter.title}
                    </h1>
                    <MDXProvider components={components}>
                        <MDXRenderer>
                            {data.mdx.body}
                        </MDXRenderer>
                    </MDXProvider>
                </StyledArticle>
                {data.mdx.tableOfContents.items && data.mdx.tableOfContents.items.length  && (
                    <TableOfContents article={data}/>
                )}
                <ScrollToTop />
            </StyledContainer>
        </Layout>
        )
}


export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      excerpt
      fields {
        slug
        readingTime {
            text
          }
      }
      frontmatter {
        title
        desc
        date(formatString: "MMM DD")
        featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    }
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  overflow-wrap: break-word;

  @media (max-width: 1100px) {
    display: block;
  }
`

const StyledArticle = styled.div`
  padding: 0 4rem;
  max-width: ${props => props.theme.articleWidth};

  @media (max-width: 1200px) {
    margin: 0 auto;
    max-width: 76.8rem;
  }
`


export default Article