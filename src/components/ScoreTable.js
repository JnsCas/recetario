import React from 'react'
import Table from "react-bootstrap/Table";

class ScoreTable extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const recipesAndAverage = this.props.recipesAndAverage.sort((a, b) => {
      if (this.props.order === "desc") {
        return b.average - a.average;
      } else {
        return a.average - b.average;
      }
    })
    return (
      <Table striped bordered hover>
        <thead align="center">
        <tr>
          <th>Recetas</th>
          <th>Promedio</th>
        </tr>
        </thead>
        <tbody align="center">
        {recipesAndAverage.map((recipeAndAverage) => (
          <tr key={recipeAndAverage.recipe.name}>
            <td>
              <a className="Button-change-view" href="#" onClick={(e) => this.props.onClickShowRecipe(e, recipeAndAverage)}>{recipeAndAverage.recipe.name} </a>
            </td>
            <td>
              {recipeAndAverage.average}
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    );
  }

}

export default ScoreTable