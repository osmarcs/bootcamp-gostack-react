import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  }

  handleInputChange = (e) => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(({ techs, newTech }) => ({
      techs: [
        ...techs,
        newTech,
      ],
      newTech: '',
    }))
  }

  render() {
    const { techs, newTech } = this.state;
    return (
      <>
        <ul>
          {techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            value={newTech}
          />
        </form>
      </>
    )
  }
}

export default TechList;
