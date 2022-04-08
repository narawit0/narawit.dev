import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({title, description, type, slug}) => {

    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
    )

    const metaTitle = title || site.siteMetadata.title
    const metaDescription = description || site.siteMetadata.description
    const metaType = type || "web"
    const metaUrl = slug ? `${site.siteMetadata.siteUrl}${slug}` : site.siteMetadata.siteUrl

    return (
        <>
            <Helmet
                htmlAttributes={{
                    lang: 'th',
                }}
                title={metaTitle}
                titleTemplate={`%s | ${site.siteMetadata.title}`}
                meta={[
                    {
                        name: "description",
                        content: metaDescription
                    },
                    {
                        name: "og:title",
                        content: metaTitle
                    },
                    {
                        name: "og:description",
                        content: metaDescription
                    },
                    {
                        name: "og:type",
                        content: metaType
                    },
                    {
                        name: "og:locale",
                        content: "th"
                    },
                    {
                        name: "og:url",
                        content: metaUrl
                    },
                    {
                        name: "twitter:title",
                        content: metaTitle
                    },
                    {
                        name: "twitter:description",
                        content: description
                    },
                    {
                        name: "twitter:card",
                        content: "summary"
                    },
                    {
                        name: "twitter:creator",
                        content: site.siteMetadata.author
                    },
                    {
                        name: "robots",
                        content: "Index, Follow, notranslate, notranslate, max-image-preview:large"
                    }
                ]}
            />
        </>
    )
}

export default SEO