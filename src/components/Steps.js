import React from 'react'

class Steps extends React.Component {

  render() {
    return(
      <div className="Steps">
        {this.props.steps.map(step => (
          <li key={step}> {step} </li>
          ))}
      </div>
    )
  }

}

export default Steps