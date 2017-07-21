import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeFilterValues } from '../actions';
import { isFetching } from '../reducers';

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
				<button type="submit" disabled={this.props.fetching || this.state.name === ''}>
					Search
				</button>
			</form>
		);
	}
}


export default connect(
	(state) => ({
		fetching: isFetching(state)
	}),
	{
		onSubmit: changeFilterValues
	}
)(CharactersForm);