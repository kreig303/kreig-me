const path = require("path")

module.exports = {
  siteMetadata: {
    title: `kreig.me`,
    description: `Blog and website for kreig.me.`,
    author: `@kreig303`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: path.join(__dirname, "src", "markdown-pages"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kreig.me`,
        short_name: `kreigme`,
        start_url: `/`,
        background_color: `#006400`,
        theme_color: `#006400`,
        // display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        include_favicon: false, // This will exclude favicon link tag
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
