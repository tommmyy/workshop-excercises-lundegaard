// connect, Provider

import React from 'react';
import ReactDOM from 'react-dom';

// import configureStore from '../redux01/configureStore';
import configureStore from './configureStoreWithMiddleware';
import Root from './Root';

const store = configureStore();

const app = document.getElementById('root');
ReactDOM.render(<Root store={store} />, app);