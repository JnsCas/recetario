import React from 'react'
import RecipesTable from "./RecipesTable";

class Menu extends React.Component {

  render() {
    return (
      <RecipesTable isMenuView={true} recipes={this.props.recipes} />
    );
  }
}

export default Menu;