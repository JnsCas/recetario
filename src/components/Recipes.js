import React from 'react'
import Recipe from "./Recipe";
import ScoreTable from "./ScoreTable";

class Recipes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShowingRecipe: false
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
    if (this.state.isShowingRecipe) {
      return (
        <Recipe
          recipeSelected={this.state.recipeSelected}
          recipeAverageSelected={this.state.recipeAverageSelected}
          updateRecipes={this.props.updateRecipes}
        />
      );
    } else {
      return (
        <ScoreTable
          recipesAndAverage={this.props.recipesAndAverage}
          onClickShowRecipe={this.showRecipe}
          order={"desc"}
        />
      );
    }
  }
}

export default Recipes