const path = require(`path`)

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              date
              title
              slug
            }
            id
          }
        }
      }
    }
  `)
  result.data.allMdx.edges.forEach(edge => {
    const blogPostPath = 'blog/' + `${edge.node.frontmatter.slug}`
    createPage({
      path: blogPostPath,
      component: blogPostTemplate,
      context: {
        title: edge.node.frontmatter.title,
        id: edge.node.id
      },
    })
  })
}