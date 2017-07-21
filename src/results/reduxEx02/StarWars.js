import React from 'react';
import PropTypes from 'prop-types';
import CharactersList from './CharactersList';
import CharacterForm from './CharacterForm';

const StarWars = ({ episode }) =>
	<section>
		<h1>{`Star Wars: episode ${episode}`}</h1>
		<CharacterForm />
		<CharactersList />
	</section>;

StarWars.propTypes = {
	episode: PropTypes.number,
};

StarWars.defaultProps = {
	episode: 4,
};

export default StarWars;
