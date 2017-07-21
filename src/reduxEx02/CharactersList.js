import React from 'react';

const CharactersList = ({ characters }) => (
	<section>
		<h2>List of Characters</h2>
		<ul>
			{characters.map((x) => <li key={x}>{x}</li>)}
		</ul>
	</section>
);

export default CharactersList;