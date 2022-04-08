const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    const articleListsTemplate = path.resolve(`src/templates/ArticleLists.js`)
    const articleTemplate = path.resolve(`src/templates/Article.js`)

    return graphql(`
    {
      allMdx (
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        // Create pages & register paths
        const edges = res.data.allMdx.edges
        const postsPerPage = 11
        const numPages = Math.ceil(edges.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/` : `/page/${i + 1}`,
                component: articleListsTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                },
            })
        })

        edges.forEach((edge, i) => {
            const node = edge.node

            createPage({
                path: node.fields.slug,
                component: articleTemplate,
                context: {
                    slug: node.fields.slug,
                },
            })
        })
    })
}