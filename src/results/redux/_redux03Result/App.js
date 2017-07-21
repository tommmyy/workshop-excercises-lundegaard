import React from 'react';
import PropTypes from 'prop-types';

import UserAddForm from './UserAddForm';
import UsersList from './UsersList';
import { addUser } from './actions';
import { getUsers } from './reducer';
import { connect } from 'react-redux';

const App = ({ addUser, users }) => (
  <div>
    <UserAddForm onSubmit={(e, user) => addUser(user)} />
    <UsersList users={users} />
  </div>
);

App.propTypes = {
  addUser: PropTypes.func,
  users: PropTypes.array,
};

export default connect(
  (state) => ({
    users: getUsers(state),
  }),
  {
    addUser,
  }
)(App);