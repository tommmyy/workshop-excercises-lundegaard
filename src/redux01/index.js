import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { increase, decrease } from './actions';
import configureStore from './configureStore';
import Counter from './Counter';

// přidání reactu

const store = configureStore();

class App extends Component {
	static propTypes = {
		store: PropTypes.object,
	}

	componentWillMount() {
		this.props.store.subscribe(this.rerender);
	}

	rerender = () => {
		this.forceUpdate();
	}

	handleIncrease = () => {
		this.props.store.dispatch(increase());
	}

	handleDecrease = () => {
		this.props.store.dispatch(decrease());
	}

	render() {
		return (
			<Counter
				value={this.props.store.getState()}
				onIncrease={this.handleIncrease}
				onDecrease={this.handleDecrease}
			/>
		);
	}
}

const app = document.getElementById('root');
ReactDOM.render(<App store={store} />, app);
