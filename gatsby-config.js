require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://privatimkerei-hoffmann.de',
    title: 'Privatimkerei Hoffmann',
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
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    'gatsby-plugin-offline',
    `gatsby-plugin-netlify`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    // Gatsby Image
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
