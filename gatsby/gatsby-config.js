const path = require('path');

const siteUrl = `https://labor.org.mx/`


module.exports = {
  siteMetadata: {
    title: `Labor`,
    description: `Description Labor`,
    author: `Labor`,
    siteUrl,
    social: {
      twitter: `schaudustin`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://labor.us7.list-manage.com/subscribe/post?u=3fa16e8727e4e2372822a26c1&amp;id=c7477b2021", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // Endpoint Newsletter
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `rzso0e8h`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Labor`,
        short_name: `Labor`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/assets/images/gatsby-icon.png`
      },
    },
  ],
}