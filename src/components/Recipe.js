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
      newScore: 0
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
    this.state.recipe.scores.push(parseInt(this.state.newScore))
  }

  render() {
    return(
      <div className="Recipe">
        <h2 className="Recipe-title"> {this.state.recipe.name} ({this.state.recipe.score}) </h2>
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