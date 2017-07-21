import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharactersList from './CharactersList';
import CharacterForm from './CharacterForm';
import CharactersStore from './CharactersStore';
import { addName } from './actions';

const getState = () => ({
	characters: CharactersStore.getCharacters(),
});

class StarWars extends Component {
	static propTypes = {
		episode: PropTypes.number,
	};

	static defaultProps = {
		episode: 4,
	};

	state = getState();

	componentDidMount() {
		CharactersStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		CharactersStore.removeChangeListener(this._onChange);
	}

	handleAddName = (event, name) => {
		addName(name);
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

	// Note: `_` na začátku má označovat metody, které jsou privátní.
	// Facebook to ve svých příkladech používá. Každopádně znatlená část komunity tento zvyk bere jako antipattern.
	// https://stackoverflow.com/questions/4484424/underscore-prefix-for-property-and-method-names-in-javascript
	// https://github.com/airbnb/javascript/issues/1024
	_onChange = () => {
		this.setState(getState())
	}
}

export default StarWars;
