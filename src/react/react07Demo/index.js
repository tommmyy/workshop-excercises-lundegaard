import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ControlledForm extends Component {
  state = { value: 'default' };

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}


const app = document.getElementById('root');
ReactDOM.render(<ControlledForm />, app);
