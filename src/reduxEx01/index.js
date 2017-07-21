import React from 'react';
import { render } from 'react-dom';

import StarWars from './StarWars';

const initialState = { episode: 4, people: ['Leia', 'Luke', 'Darth Vader'] };

render(<StarWars {...initialState} />, document.getElementById('root'));