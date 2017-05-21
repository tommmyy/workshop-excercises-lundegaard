import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

const Baloon = ({ size, children }) => {
	const scale = size > 1 ? 1 : size;
	return (
		<div>
			{size > 1 ?
				<h1
					style={{
						transform: `scale(${`scale`})`,
						color: 'red',
					}}
				>
					Bang!!!
				</h1> :
				<h1
					style={{
						transform: `scale(${1 + size})`,
						color: `hsl(0, ${Math.ceil(100 * (size > 1 ? 1 : size))}%, 50%)`,
					}}
				>
					{children}
				</h1>
			}
		</div>
	);
}

Baloon.propTypes = {
	children: PropTypes.node,
	size: PropTypes.number,
};

class App extends Component {
	static propTypes = {
		step: PropTypes.number
	};

	static defaultProps = {
		step: 0.1,
	};

	state = { size: 0 };

	handleButtonClick = () => {
		this.setState({ size: this.state.size + this.props.step })
	}

	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<button onClick={this.handleButtonClick}>
					Fouk
				</button>
				<hr />
				<Baloon size={this.state.size}>
					Nafoukni mě!
				</Baloon>
			</div>
		);
	}
}



const app = document.getElementById('root');
ReactDOM.render(<App />, app);
