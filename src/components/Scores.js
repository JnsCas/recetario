import React from 'react'
import RecipesTable from "./RecipesTable";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class Scores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "best"
    }
  }

  render() {
    return (
      <Tabs
        id="controlled-tab-example"
        className="Recipe-tabs"
        activeKey={this.state.key}
        onSelect={(key) => this.setState({ key })}
      >
        <Tab eventKey="best" title="Mejor Puntaje">
          <RecipesTable isMenuView={false} recipes={this.props.recipes} />
        </Tab>
        <Tab eventKey="worst" title="Peor Puntaje">

        </Tab>
      </Tabs>
    );
  }
}

export default Scores