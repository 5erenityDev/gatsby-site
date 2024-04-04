/**
 * @type {import('gatsby').GatsbyConfig}
 */
blogPath = __dirname + '/blog';
module.exports = {
  siteMetadata: {
    title: "Sean's Gatsby Site",
    author: "Sean Blankenship"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'blog',
        path: blogPath,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "drupal",
        fieldName: "Drupal",
	      url: "https://csc496f22demo.tldr.dev/graphql"
      }
    },
  ],
};