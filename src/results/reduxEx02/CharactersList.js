import React, { Component } from 'react';
import CharactersStore from './CharactersStore';

const getState = () => ({
	characters: CharactersStore.getCharacters(),
});


class CharactersList extends Component {
	state = getState();

	componentDidMount() {
		CharactersStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		CharactersStore.removeChangeListener(this._onChange);
	}

	render() {
		return (
			<section>
				<h2>List of Characters</h2>
				<ul>
					{this.state.characters.map((x) => <li key={x}>{x}</li>)}
				</ul>
			</section>
		);
	}

	_onChange = () => {
		this.setState(getState())
	}
}

export default CharactersList;