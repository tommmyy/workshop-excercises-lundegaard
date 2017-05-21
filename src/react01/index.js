import React from 'react';
import ReactDOM from 'react-dom';

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>{this.props.time.toLocaleString()}</p>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

const app = document.getElementById('root');

function rerender() {
  ReactDOM.render(<Timer time={new Date()}>text</Timer>, app);
}

setInterval(rerender, 1000);
