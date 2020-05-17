import React from 'react'
import Table from 'react-bootstrap/Table'
import Recipe from "./Recipe";

class RecipesTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowingRecipe: false,
      recipeSelected: {},
      recipeAverageSelected: 0
    }

    this.showRecipe = this.showRecipe.bind(this)
    this.calculateAverageScore = this.calculateAverageScore.bind(this)
  }

  showRecipe(e, recipeAndAverage) {
    e.preventDefault()
    this.setState({
      isShowingRecipe: true,
      recipeSelected: recipeAndAverage.recipe,
      recipeAverageSelected: recipeAndAverage.average
    })
  }

  calculateAverageScore(scores) {
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
        recipeAverageSelected={this.state.recipeAverageSelected}
      />
    } else {
      let secondColumnName;
      if (this.props.isMenuView) { //FIXME
        secondColumnName = "Puntaje"
      } else {
        secondColumnName = "Promedio"
      }
      const recipesAndAverage = this.props.recipes.map(recipe => {
        let recipeAndAverage = {};
        recipeAndAverage.recipe = recipe;
        recipeAndAverage.average = this.calculateAverageScore(recipe.scores);
        return recipeAndAverage;
      })
      viewToShow =
        <Table striped bordered hover>
          <thead align="center">
          <tr>
            <th>Recetas</th>
            <th>{secondColumnName}</th>
          </tr>
          </thead>
          <tbody align="center">
          {recipesAndAverage.map((recipeAndAverage) => (
            <tr key={recipeAndAverage.recipe.name}>
              <td>
                <a href="#" onClick={(e) => this.showRecipe(e, recipeAndAverage)}>{recipeAndAverage.recipe.name} </a>
              </td>
              <td>
                {recipeAndAverage.average}
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