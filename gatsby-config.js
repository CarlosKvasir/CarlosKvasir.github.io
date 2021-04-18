/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Minhas Anotações`,
    description: `Blog com minhas anotações de aprendizado`,
    author: `Carlos Kvasir`,
    siteUrl: `https://carloskvasir.me`,
    user: `carloskvasir`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // add configs
        minify: true,
      },
    },
  ],
}
