import React from 'react'
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Recipe from "./Recipe";
import ScoreTable from "./ScoreTable";

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "best",
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
    let viewToShow;
    if (this.state.isShowingRecipe) {
      viewToShow =
        <Recipe
          recipeSelected={this.state.recipeSelected}
          recipeAverageSelected={this.state.recipeAverageSelected}
        />
    } else {
      viewToShow =
        <Tabs
          id="controlled-tab-example"
          className="Recipe-tabs"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          <Tab eventKey="best" title="Mejor Puntaje">
            <ScoreTable
              recipesAndAverage={this.props.recipesAndAverage}
              onClickShowRecipe={this.showRecipe}
              order={"desc"}
            />
          </Tab>
          <Tab eventKey="worst" title="Peor Puntaje">
            <ScoreTable
              recipesAndAverage={this.props.recipesAndAverage}
              onClickShowRecipe={this.showRecipe}
              order={"asc"}
            />
          </Tab>
        </Tabs>
    }

    return viewToShow;
  }
}

export default Scores