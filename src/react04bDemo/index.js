import React from 'react';
import ReactDOM from 'react-dom';

class DeepMerge extends React.Component {
  state = {
    person: {
      name: 'Major',
      surname: 'Zeman'
    }
  };

  handleClick = () => {
    this.setState({
      person: {
        ...this.state.person,
        name: 'Miloš',
      },
    });
  }

  render() {
    const { person: { name, surname } } = this.state;
    return (
      <div>
        {`${name} ${surname}`}
        <hr />
        <button onClick={this.handleClick}>♻</button>
      </div>
    );
  }
}

ReactDOM.render(<DeepMerge />, document.getElementById('root'));