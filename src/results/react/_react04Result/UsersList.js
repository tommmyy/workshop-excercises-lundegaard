import React, { PropTypes } from 'react';

const UsersList = ({ users }) => (
  <ul>
    {
      users.map(
        ({name, surname}, i) => (<li key={i}>{`${name} ${surname}`}</li>)
      )
    }
  </ul>
);

UsersList.propTypes = {
  users: PropTypes.array,
};

export default UsersList;