module.exports = {
  siteMetadata: {
    title: `Narawit.dev`,
    description: 'เว็บไซต์สำหรับเขียนบทความโปรแกรมมิ่ง เพื่อจดบันทึกความรู้ที่ได้ศึกษามา และ นำมาแชร์ให้กับเพื่อนๆ',
    siteUrl: `https://narawit.dev`,
    author: `Narawit Kaewbun`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "UA-204707221-1"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.svg"
      }
    },
    "gatsby-plugin-slug",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-remark-images",
    "gatsby-remark-autolink-headers",
      "gatsby-remark-images-zoom",
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-link-icon`
            }
          },
        ],
      }
    },
    "gatsby-remark-reading-time",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": `${__dirname}/posts/images`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": `${__dirname}/posts/`
      },
    },
    ]
};