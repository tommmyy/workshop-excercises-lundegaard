import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const getBaloonStyles = (size) => {
	const scale = size > 1 ? 1 : size;
	return {
		transform: `scale(${1 + scale})`,
		color: `hsl(0, ${Math.ceil(100 * scale)}%, 50%)`,
	};
};

const Baloon = ({
	size,
	label,
	labelBang,
}) => (
	<h1 style={getBaloonStyles(size)}>
		{ size < 1 ? label : labelBang }
	</h1>
);

Baloon.propTypes = {
	label: PropTypes.node.isRequired,
	labelBang: PropTypes.node,
	size: PropTypes.number,
};

Baloon.defaultProps = {
	labelBang: 'Bang!!!',
	size: 0,
}

class App extends Component {
	static propTypes = {
		step: PropTypes.number
	};

	static defaultProps = {
		step: 0.05,
	};

	state = { size: 0 };

	handleButtonClick = () => {
		this.setState({ size: this.state.size + this.props.step })
	}

	handleResetClick = () => {
		this.setState({ size: 0 })
	}

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<button onClick={this.handleButtonClick}>
					Fouk
				</button>
				<button onClick={this.handleResetClick}>
					Reset
				</button>
				<hr />
				<Baloon size={this.state.size} label="Nafoukni mě!" />
			</div>
		);
	}
}



const app = document.getElementById('root');
ReactDOM.render(<App />, app);
