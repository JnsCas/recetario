import React from 'react'
import Table from 'react-bootstrap/Table'
import Recipe from "./Recipe";

class RecipesTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowingRecipe: false,
      recipeSelected: {}
    }

    this.showRecipe = this.showRecipe.bind(this)
    this.averageScore = this.averageScore.bind(this)
  }

  showRecipe(e, recipe) {
    e.preventDefault()
    this.setState({
      isShowingRecipe: true,
      recipeSelected: recipe
    })
  }

  averageScore(scores) {
    console.log(scores)
    const totalScores = scores.reduce((a, b) => a+b)
    console.log(totalScores)
    const newAverage = totalScores / scores.length
    return Number.isInteger(newAverage) ? newAverage : newAverage.toFixed(1)
  }

  render() {
    let viewToShow;
    if (this.state.isShowingRecipe) {
      viewToShow = <Recipe
        recipeSelected={this.state.recipeSelected}
      />
    } else {
      let secondColumnName;
      if (this.props.isMenuView) {
        secondColumnName = "Puntaje"
      } else {
        secondColumnName = "Promedio"
      }
      viewToShow =
        <Table striped bordered hover>
          <thead align="center">
          <tr>
            <th>Recetas</th>
            <th>{secondColumnName}</th>
          </tr>
          </thead>
          <tbody align="center">
          {this.props.recipes.map(recipe => (
            <tr key={recipe.name}>
              <td>
                <a href="#" onClick={(e) => this.showRecipe(e, recipe)}>{recipe.name} </a>
              </td>
              <td>
                {this.averageScore(recipe.scores)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    }

    return viewToShow;
  }
}

export default RecipesTable