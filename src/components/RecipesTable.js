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
  }

  showRecipe(e, recipeAndAverage) {
    e.preventDefault()
    this.setState({
      isShowingRecipe: true,
      recipeSelected: recipeAndAverage.recipe,
      recipeAverageSelected: recipeAndAverage.average
    })
  }

  render() {
    let viewToShow;
    if (this.state.isShowingRecipe) {
      viewToShow = <Recipe
        recipeSelected={this.state.recipeSelected}
        recipeAverageSelected={this.state.recipeAverageSelected}
      />
    } else {
      viewToShow =
        <Table striped bordered hover>
          <thead align="center">
          <tr>
            <th>Recetas</th>
            <th>Promedio</th>
          </tr>
          </thead>
          <tbody align="center">
          {this.props.recipesAndAverage.map((recipeAndAverage) => (
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