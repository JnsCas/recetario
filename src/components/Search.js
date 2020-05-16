import React from 'react'
import {Button} from "react-bootstrap";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toSearch: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      toSearch: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onClickSearchButton(this.state.toSearch)
  }

  render() {
    return (
      <div className="App-search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            pattern="[a-zA-Z]*"
            placeholder="Receta..."
            value={this.state.toSearch}
            onChange={this.handleChange}
          />
          <Button type="submit" variant="outline-primary">Buscar</Button>{' '}
        </form>
      </div>
    )
  }

}

export default Search