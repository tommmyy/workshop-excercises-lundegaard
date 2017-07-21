import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// 1.
// import configureStore from './configureStore';


// 2.
// const store = configureStore();

const app = document.getElementById('root');
ReactDOM.render(<App store={store} />, app);
