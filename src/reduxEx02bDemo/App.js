import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { increase, decrease } from './actions';
import Counter from './Counter';


class App extends Component {
	static propTypes = {
		store: PropTypes.object,
	}

	handleIncrease = () => {

	}

	handleDecrease = () => {

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

export default App;