import React from 'react'
import RecipesTable from "./RecipesTable";

class Menu extends React.Component {

  render() {
    return (
      <RecipesTable recipesAndAverage={this.props.recipesAndAverage} />
    );
  }
}

export default Menu;