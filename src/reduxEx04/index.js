import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import data from './data.json';

const initialState = { volumes: data };

const store = null; // TODO

render(<Root store={store} />, document.getElementById('root'));