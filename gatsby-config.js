module.exports = {
  siteMetadata: {
    title: 'Makkala Jagriti',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
  ],
}
