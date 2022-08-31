module.exports = {
  siteMetadata: {
    title: 'Hamilton Walker PR',
    author: 'Sandy Wyper',
    description: `We work with our clients to build and protect positive reputations.
    Using strategic, integrated public relations and marketing communications, we create connections with the people who matter to you.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
