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
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsbyjs`,
        short_name: `gatsbyjs`,
        start_url: `/`,
        background_color: `#DBE7FB`,
        theme_color: `#BC9612`,
        display: `minimal-ui`,
        icon: `src/images/blurbs/coffee.jpg`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
  ],
}
