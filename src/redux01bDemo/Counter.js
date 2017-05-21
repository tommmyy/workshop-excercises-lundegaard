import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value, onIncrease, onDecrease }) => (
	<div>
		<h1>{value}</h1>
		<hr />
		<button onClick={onIncrease}>+</button>
		<button onClick={onDecrease}>-</button>
	</div>
);

Counter.propTypes = {
	value: PropTypes.number,
	onIncrease: PropTypes.func,
	onDecrease: PropTypes.func,
};

export default Counter;