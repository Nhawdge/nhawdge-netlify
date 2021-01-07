module.exports = {
  siteMetadata: {
    title: `Nhawdge.net`,
    description: `Nhawdge.net - John Pavek's Official Blog`,
    author: `@nhawdge`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}
