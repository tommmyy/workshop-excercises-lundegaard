import React, { Component } from 'react';
import UserAddForm from './UserAddForm';
import UsersList from './UsersList';

class App extends Component {
  state = {
    users: [{
      name: 'Jan',
      surname: 'Novák',
    }]
  }

  handleAdd = (_, { name, surname }) => {
    this.setState({
      users: [
        ...this.state.users,
        { name, surname }
      ],
    });
  }

  render() {
    return (
      <div>
        <UserAddForm onSubmit={this.handleAdd} />
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

export default App;