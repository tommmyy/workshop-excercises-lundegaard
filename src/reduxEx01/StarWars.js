import React from 'react';
import CharactersList from './CharactersList';

const StarWars = ({ episode, people }) => (
	<section>
		<h1>{`Star Wars: episode ${episode}`}</h1>
		<CharactersList people={people} />
	</section>
);

export default StarWars;