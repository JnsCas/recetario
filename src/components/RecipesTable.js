import React from 'react'
import Table from 'react-bootstrap/Table'

class RecipesTable extends React.Component {

  render() {
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
            <td>{recipe.name}</td>
            <td>{recipe.score}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    )
  }
}

export default RecipesTable