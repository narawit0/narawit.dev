import React from 'react'
import {graphql} from "gatsby";
import Layout from '../Layouts/index';
import Articles from '../components/Articles';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const ArticleLists = ({ data, pageContext }) => {

    const { numPages, currentPage } = pageContext
    const articles = data.allMdx.edges

    return (
        <Layout>
            <SEO title="เว็บไซต์ให้ความรู้เกี่ยวกับการเขียนโปรแกรม" />
            <Articles articles={articles}/>
            {numPages > 1 && (
                <Pagination numPages={numPages} currentPage={currentPage} />
            )}
        </Layout>
    )
}

export const pageQuery = graphql`
    query MyQuery($skip: Int!, $limit: Int!) {
      allMdx (
        sort: { fields: [frontmatter___date], order: DESC}
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            id
            body
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMM DD")
              tags
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
      }
    } 
`

export default ArticleLists