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
  }

  showRecipe(e, recipe) {
    e.preventDefault()
    this.setState({
      isShowingRecipe: true,
      recipeSelected: recipe
    })
  }

  render() {
    let tableToShow;
    if (this.state.isShowingRecipe) {
      tableToShow = <Recipe
        recipeSelected={this.state.recipeSelected}
      />
    } else {
      let secondColumnName;
      if (this.props.isMenuView) {
        secondColumnName = "Puntaje"
      } else {
        secondColumnName = "Promedio"
      }
      tableToShow =
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
              <td>{recipe.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    }

    return tableToShow;

    /*
    let secondColumnName;
    if (this.props.isMenuView) {
      secondColumnName = "Puntaje"
    } else {
      secondColumnName = "Promedio"
    }
    return (
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
              <a href="#" onClick={this.showRecipe}>{recipe.name} </a>
            </td>
            <td>{recipe.score}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    )
     */
  }
}

export default RecipesTable