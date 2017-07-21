import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ControlledForm extends Component {
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.name.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          defaultValue="default"
          ref={(name) => this.name = name}
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}


const app = document.getElementById('root');
ReactDOM.render(<ControlledForm />, app);
