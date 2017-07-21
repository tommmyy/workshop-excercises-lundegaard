import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Section = ({ heading, children }) => (
	<section>
		<h1>{heading}</h1>
		{children}
	</section>
);

Section.propTypes = {
	heading: PropTypes.node.isRequired,
	children: PropTypes.node,
};

class App extends Component {
	render() {
		return (
			<Section>
				Content
			</Section>
		);
	}
}

const app = document.getElementById('root');
ReactDOM.render(<App refresh={200} />, app);
