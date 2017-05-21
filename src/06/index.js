import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const setFirstArg = (ctx, name) => (el) => ctx[name] = el;


class UncontrolledForm extends Component {
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.iName.value);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          ref={setFirstArg(this, 'iName')}
          defaultValue="default"
        />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}


const app = document.getElementById('root');
ReactDOM.render(<UncontrolledForm />, app);
