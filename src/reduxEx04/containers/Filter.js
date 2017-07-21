import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilterValues } from '../actions';

const initialState = {
	name: '',
};

class CharactersForm extends Component {
	state = initialState;

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(this.state.name);
	};

	handleChangeName = (event) => {
		this.setState({ name: event.target.value });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="name" onChange={this.handleChangeName} value={this.state.name} />
				<button type="submit">Search</button>
			</form>
		);
	}
}


// TODO: connect onSubmit to changeFilterValues action
export default CharactersForm;