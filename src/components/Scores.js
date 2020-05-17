import React from 'react'
import RecipesTable from "./RecipesTable";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Recipe from "./Recipe";
import Table from "react-bootstrap/Table";
import ScoreTable from "./ScoreTable";

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "best",
      isShowingRecipe: false
    }

    this.calculateAverageScore = this.calculateAverageScore.bind(this)
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
      viewToShow =
        <Recipe
          recipeSelected={this.state.recipeSelected}
          recipeAverageSelected={this.state.recipeAverageSelected}
        />
    } else {
      const recipesAndAverage = this.props.recipes.map(recipe => {
        let recipeAndAverage = {};
        recipeAndAverage.recipe = recipe;
        recipeAndAverage.average = this.calculateAverageScore(recipe.scores);
        return recipeAndAverage;
      })

      viewToShow =
        <Tabs
          id="controlled-tab-example"
          className="Recipe-tabs"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          <Tab eventKey="best" title="Mejor Puntaje">
            <ScoreTable recipesAndAverage={recipesAndAverage} onClickShowRecipe={this.showRecipe} order={"desc"}/>
          </Tab>
          <Tab eventKey="worst" title="Peor Puntaje">
            <ScoreTable recipesAndAverage={recipesAndAverage} onClickShowRecipe={this.showRecipe} order={"asc"}/>
          </Tab>
        </Tabs>
    }

    return viewToShow;
  }
}

export default Scores