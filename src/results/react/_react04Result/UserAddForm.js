import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultState = { name: '', surname: '' };

class UserAddForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  static defaultProps = {
    onSubmit: () => {},
  };

  state = defaultState;

  handleChange = (event, field) => {
    this.setState({[field]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event, this.state);
    this.setState(defaultState);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={(e) => this.handleChange(e, 'name')}
        />
        <br />

        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          id="surname"
          value={this.state.surname}
          onChange={(e) => this.handleChange(e, 'surname')}
        />
        <br />

        <input type="submit" value="Submit" />
        <hr />
      </form>
    );
  }
}
export default UserAddForm;