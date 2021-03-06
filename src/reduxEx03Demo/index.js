import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import Root from './Root';

const store = configureStore();

const app = document.getElementById('root');
ReactDOM.render(<Root store={store} />, app);