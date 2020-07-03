module.exports = {
  siteMetadata: {
    title: `MReyes`,
    description: `Personal portfolio and photography site featuring the work of Matthew Reyes`,
    author: `@keolasin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `albums`,
        path: `${__dirname}/src/pages/albums`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matthew Reyes Portfolio`,
        short_name: `MReyes`,
        start_url: `/`,
        background_color: `#DBE7FB`,
        theme_color: `#BC9612`,
        display: `minimal-ui`,
        icon: `src/images/blurbs/portrait.jpg`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
