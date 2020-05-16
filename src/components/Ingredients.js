import React from 'react'

class Ingredients extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      key: "ingredients",
      originalIngredients: this.props.ingredients,
      originalPeopleQuantity: this.props.peopleQuantity,
      variableIngredients: this.props.ingredients,
      variablePeopleQuantity: this.props.peopleQuantity
    }
    this.calculateQuantityIngredients = this.calculateQuantityIngredients.bind(this)
  }

  calculateQuantityIngredients(e) {
    const newPeopleQuantity = e.target.value
    if (newPeopleQuantity) {
      const newIngredients = this.state.originalIngredients.map( (ingredient) => {
        let newIngredient = {};
        newIngredient.name = ingredient.name;
        newIngredient.quantityKg = ((newPeopleQuantity * ingredient.quantityKg) / this.state.originalPeopleQuantity);
        return newIngredient;
      })
      this.setState({
        variableIngredients: newIngredients,
        variablePeopleQuantity: newPeopleQuantity
      })
    }
  }

  render() {
    return(
      <div className="Ingredients">
        <p>
          <label>Para <input
              className="Ingredients-input"
              type="number"
              min="1"
              placeholder={this.state.variablePeopleQuantity}
              onChange={this.calculateQuantityIngredients}
            /> personas
          </label>

        </p>
        {this.state.variableIngredients.map(ingredient => (
          <li key={ingredient.name}> {ingredient.quantityKg} kg {ingredient.name}</li>
        ))}
      </div>
    )
  }

}

export default Ingredients