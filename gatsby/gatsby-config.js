

const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Labor`,
        description: `Description Labor`,
        author: `Luis`
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
              path: path.join(__dirname, `src`, `assets`, `images`) ,
            },
          },
        //   {
        //     resolve: "gatsby-plugin-mailchimp",
        //     options: {
        //       endpoint:
        //         "https://dreamx.us20.list-manage.com/subscribe/post?u=11a03b5699119a55c0e253226&amp;id=cc04537fdd", // string; add your MC list endpoint here; see instructions below
        //       timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
        //     },
        //   },
          // {
          //   resolve: `gatsby-source-datocms`,
          //   options: {
          //     // You can find your read-only API token under the Settings > API tokens
          //     // section of your administrative area. Make sure to grant both CDA and CMA permissions.
          //     apiToken: `9df1785fa4475174d417aedd30ea91`,
        
          //     // The project environment to read from. Defaults to the primary environment:
          //     environment: `main`,
        
          //     // If you are working on development/staging environment, you might want to
          //     // preview the latest version of records instead of the published one:
          //     previewMode: false,
        
          //     // Disable automatic reloading of content when some change occurs on DatoCMS:
          //     disableLiveReload: false,
        
          //     // Custom API base URL (most don't need this)
          //     // apiUrl: 'https://site-api.datocms.com',
        
          //     // Setup locale fallbacks
          //     // In this example, if some field value is missing in Italian, fall back to English
          //     localeFallbacks: {
          //       en: ['es'],
          //     },
          //   },
          // },
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