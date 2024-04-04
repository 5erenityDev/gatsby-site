import * as React from 'react'

const RecipePost = ({ pageContext }) => {
  return (
    <div>
      <h1>{pageContext.title}</h1>
      <p>Prep Time: {pageContext.preparationTime}</p>
      <p>Cooking Time: {pageContext.cookingTime}</p>
      <p>Ingredients: {pageContext.ingredients}</p>
    </div>
  )
}

export default RecipePost