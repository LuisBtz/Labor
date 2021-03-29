module.exports = {
    siteMetadata: {
        title: `Labor`,
        description: `Description Labor`,
        author: `Luis`
      },
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/assets/images/`,
            },
          },
    ],
}