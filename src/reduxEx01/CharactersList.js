import React from 'react';

const CharactersList = ({ people }) => (
	<section>
		<h2>List of Characters</h2>
		<ul>
			{people.map((x) => <li key={x}>{x}</li>)}
		</ul>
	</section>
);

export default CharactersList;