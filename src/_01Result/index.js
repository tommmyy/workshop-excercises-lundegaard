import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Timer = ({ time }) => (
	<div>
		<h1>Timer</h1>
		{time ?
			<p>{time.toISOString()}</p> :
			null
		}
	</div>
);

Timer.propTypes = {
	time: PropTypes.object,
};

class App extends Component {
	static propTypes = {
		refresh: PropTypes.number,
	};

	static defaultProps = {
		refresh: 1000,
	};

	state = {
		time: null,
	};

	componentDidMount() {
		this.interval = setInterval(
			() => this.setState({ time: new Date() }),
			this.props.refresh,
		)
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return <Timer time={this.state.time} />;
	}
}



const app = document.getElementById('root');
ReactDOM.render(<App refresh={200} />, app);
