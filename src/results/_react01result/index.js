import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Timer = ({ time, children }) => (
	<div>
		<h1>Timer</h1>
		{time ?
			<p>{time.toLocaleString()}</p> :
			null
		}
		{children}
	</div>
);

Timer.propTypes = {
	children: PropTypes.node,
	time: PropTypes.object,
};


const app = document.getElementById('root');

function rerender() {
  ReactDOM.render(<Timer time={new Date()}>text</Timer>, app);
}

setInterval(rerender, 1000);
