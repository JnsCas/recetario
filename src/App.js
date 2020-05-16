import React from 'react';
import Menu from './components/Menu'
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
      isShowingMenu: true
    }
    this.changeTableToShow = this.changeTableToShow.bind(this)
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
      isShowingMenu: !this.state.isShowingMenu
    })
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      let textButton, tableToShow;
      if (this.state.isShowingMenu) {
        textButton = "valoraciones"
        tableToShow = <Menu recipes={this.state.recipes}/>
      } else {
        textButton = "menú"
        tableToShow = <Scores recipes={this.state.recipes}/>
      }
      return (
        <div className="App-background">
          <div className="App-header">
            <h1>Recetario</h1>
          </div>
          <div className="App-body">
            <Search/>
            <a href="#" onClick={this.changeTableToShow}> Ver {textButton} </a>
            {tableToShow}
          </div>
        </div>
      )
    }
  }
}

export default App;
