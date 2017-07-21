import React, { Component } from 'react';
import FormStore from './FormStore';
import { addName } from './actions';
import { change, reset } from './formActions';

const getState = () => FormStore.getFormData();

class CharactersForm extends Component {
	state = getState();

	handleSubmit = (event) => {
		event.preventDefault();

		addName(this.state.name);

		this.reset();
	};

	componentDidMount() {
		FormStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		FormStore.removeChangeListener(this._onChange);
	}

	reset() {
		reset();
	}

	handleChangeName = (event) => {
		change('name', event.target.value);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input name="characterName" onChange={this.handleChangeName} value={this.state.name} />
				<button type="submit">Přidat postavu</button>
			</form>
		);
	}
	_onChange = () => {
		this.setState(getState())
	}
}


export default CharactersForm;