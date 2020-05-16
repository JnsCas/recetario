import React from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Ingredients from "./Ingredients";
import Steps from "./Steps";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "ingredients",
      recipe: this.props.recipeSelected
    }
  }

  render() {
    return(
      <Tabs
        id="controlled-tab-example"
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
    )
  }
}

export default Recipe