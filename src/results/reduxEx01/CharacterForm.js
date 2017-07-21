import React, { Component } from 'react';

const initialState = {
	name: '',
};

class CharactersForm extends Component {
	state = initialState;

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.onSubmit(event, this.state.name);

		this.reset();
	};

	reset() {
		this.setState(initialState);
	}

	handleChangeName = (event) => {
		this.setState({ name: event.target.value });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>List of Characters</h2>
				<input name="characterName" onChange={this.handleChangeName} value={this.state.name} />
				<button type="submit">Přidat postavu</button>
			</form>
		);
	}
}


export default CharactersForm;