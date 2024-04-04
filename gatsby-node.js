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
  const recipePostTemplate = path.resolve(`src/templates/recipe-post.js`)
  const resultRecipe = await graphql(`
    query {
      Drupal {
        nodeRecipes(first: 10) {
          edges {
            node {
              path
              title
              id
              cookingTime
              preparationTime
              numberOfServings
              ingredients
            }
          }
        }
      }
    }
  `)
  resultRecipe.data.Drupal.nodeRecipes.edges.forEach(edge => {
    const recipePostPath = `${edge.node.path}`.slice(3);
    createPage({
      path: recipePostPath,
      component: recipePostTemplate,
      context: {
        title: edge.node.title,
        id: edge.node.id,
        cookingTime: edge.node.cookingTime,
        preparationTime: edge.node.preparationTime,
        numberOfServings: edge.node.numberOfServings,
        ingredients: edge.node.ingredients,
      },
    })
  })
}