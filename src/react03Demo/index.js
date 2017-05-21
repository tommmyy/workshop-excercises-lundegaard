import React from 'react';
import ReactDOM from 'react-dom';

class ShallowMerge extends React.Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        {this.state.counter}
        <hr />
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
const app = document.getElementById('root');
ReactDOM.render(<ShallowMerge />, app);
