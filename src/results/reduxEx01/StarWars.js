import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharactersList from './CharactersList';
import CharacterForm from './CharacterForm';

class StarWars extends Component {
	static propTypes = {
		episode: PropTypes.number,
		initialCharacters: PropTypes.arrayOf(PropTypes.string),
	};

	constructor(props) {
		super(props);

		this.state = {
			characters: props.initialCharacters,
		};
	}

	handleAddName = (event, name) => {
		this.setState({
			characters: [
				...this.state.characters,
				name,
			],
		});
	};

	render() {
		const { characters } = this.state;
		const { episode } = this.props;

		return (
			<section>
				<h1>{`Star Wars: episode ${episode}`}</h1>
				<CharacterForm onSubmit={this.handleAddName} />
				<CharactersList characters={characters} />
			</section>
		);
	}
}

export default StarWars;