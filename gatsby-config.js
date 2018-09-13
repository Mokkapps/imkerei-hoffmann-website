module.exports = {
  siteMetadata: {
    title: 'Imkerei Hoffmann',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Imkerei Hoffmann',
        short_name: 'Imkerei',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    // Gatsby Image
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Typography.js
    `gatsby-plugin-typography`
  ],
}
