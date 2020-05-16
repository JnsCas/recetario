import React from 'react'
import RecipesTable from "./RecipesTable";

class Scores extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RecipesTable isMenuView={false} recipes={this.props.recipes} />
    );
  }
}

export default Scores