import React from 'react';
import Recipes from './components/Recipes'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Search from "./components/Search";
import Scores from "./components/Scores";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      recipes: [],
      isShowingRecipes: true
    }
    this.changeTableToShow = this.changeTableToShow.bind(this)
    this.filterAndUpdateRecipes = this.filterAndUpdateRecipes.bind(this)
    this.createRecipesAndAverage = this.createRecipesAndAverage.bind(this)
    this.calculateAverageScore = this.calculateAverageScore.bind(this)
  }

  componentDidMount() {
    fetch("http://localhost:3001/recipes")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            recipes: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  changeTableToShow(e) {
    e.preventDefault();
    this.setState({
      isShowingRecipes: !this.state.isShowingRecipes
    })
  }

  filterAndUpdateRecipes(toSearch) {
    const queryParam = toSearch !== '' ? `?filter=${toSearch}` : ""
    fetch("http://localhost:3001/recipes" + queryParam)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            recipes: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  calculateAverageScore(scores) {
    const totalScores = scores.reduce((a, b) => a+b)
    const newAverage = totalScores / scores.length
    return Number.isInteger(newAverage) ? newAverage : newAverage.toFixed(1)
  }

  createRecipesAndAverage() {
    return this.state.recipes.map(recipe => {
      let recipeAndAverage = {};
      recipeAndAverage.recipe = recipe;
      recipeAndAverage.average = this.calculateAverageScore(recipe.scores);
      return recipeAndAverage;
    })
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      let textButton,
        tableToShow,
        recipesAndAverage = this.createRecipesAndAverage();
      if (this.state.isShowingRecipes) {
        textButton = "valoraciones"
        tableToShow = <Recipes recipesAndAverage={recipesAndAverage} updateRecipes={this.filterAndUpdateRecipes}/>
      } else {
        textButton = "recetas"
        tableToShow = <Scores recipesAndAverage={recipesAndAverage} updateRecipes={this.filterAndUpdateRecipes} />
      }
      return (
        <div className="App-background">
          <div className="App-header">
            <h1>Recetario</h1>
          </div>
          <div className="App-body">
            <Search onClickSearchButton={this.filterAndUpdateRecipes}/>
            <a href="#" onClick={this.changeTableToShow}> Ver {textButton} </a>
            <div className="Tables-view">
              {tableToShow}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default App;
