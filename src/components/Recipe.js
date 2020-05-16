import React from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import {Button} from "react-bootstrap";

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: "ingredients",
      recipe: this.props.recipeSelected,
      alreadyPush: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      newScore: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.newScore) {
      if (this.state.alreadyPush) {
        alert("Solo puedes votar 1 vez.")
      } else {
        this.state.recipe.scores.push(parseInt(this.state.newScore))
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
          <Tab eventKey="steps" title="Pasos">
            <Steps steps={this.state.recipe.steps}/>
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

export default Recipe