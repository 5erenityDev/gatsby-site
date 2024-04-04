import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const RecipesPage = ({ data }) => {
  return (
    <Layout pageTitle="Recipes">
      {
        data.Drupal.nodeRecipes.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`${node.path}`.slice(3)}>
                {node.title}
              </Link>
            </h2>
            <p>Prep Time: {node.preparationTime} Minutes</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    Drupal {
      nodeRecipes(first: 10) {
        nodes {
          changed
          id
          cookingTime
          created
          path
          status
          title
          preparationTime
          numberOfServings
          recipeInstruction {
            format
            processed
            value
          }
          ingredients
        }
      }
    }
  }
`

export const Head = () => <Seo title="Recipes" />

export default RecipesPage