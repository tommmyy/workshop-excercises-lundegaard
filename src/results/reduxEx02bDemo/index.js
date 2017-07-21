import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';

import App from './App';

const store = configureStore();

const app = document.getElementById('root');
ReactDOM.render(<App store={store} />, app);
