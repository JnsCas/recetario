import React from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import {Button} from "react-bootstrap";

class RecipeDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: "ingredients",
      recipe: this.props.recipeSelected,
      alreadyPush: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.putScore = this.putScore.bind(this)
  }

  putScore(id, score) {
    fetch("http://localhost:3001/recipes/" + id, {
      method: 'PUT',
      body: JSON.stringify({"score": score}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.props.updateRecipes('')
        },
        (error) => {
          console.log(error)
        }
      )
  }

  handleChange(e) {
    this.setState({
      newScore: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const newScore = this.state.newScore
    if (newScore) {
      if (this.state.alreadyPush) {
        alert("Solo puedes votar 1 vez.")
      } else {
        this.putScore(this.state.recipe.id, parseInt(newScore))
      }
      this.setState({
        alreadyPush: true
      })
    }
  }

  render() {
    return(
      <div className="Recipe">
        <h2 className="Recipe-title"> {this.state.recipe.name} ({this.props.recipeAverageSelected}) </h2>
        <Tabs
          id="controlled-tab-example"
          className="Recipe-tabs"
          activeKey={this.state.key}
          onSelect={(key) => this.setState({ key })}
        >
          <Tab eventKey="ingredients" title="Ingredientes">
            <Ingredients
              ingredients={this.state.recipe.ingredients}
              peopleQuantity={this.state.recipe.peopleQuantity}
            />
          </Tab>
          <Tab eventKey="steps" title="Pasos" width="100%">
            <Steps steps={this.state.recipe.steps} />
          </Tab>
        </Tabs>
        <div className="Score-push">
          <form onSubmit={this.handleSubmit}>
            <input
              className="Score-push-input"
              type="number"
              min="1"
              max="5"
              placeholder="Puntaje"
              onChange={this.handleChange}
            />
            <Button type="submit" variant="outline-primary">Guardar</Button>
          </form>
        </div>
      </div>
    )
  }
}

export default RecipeDetails