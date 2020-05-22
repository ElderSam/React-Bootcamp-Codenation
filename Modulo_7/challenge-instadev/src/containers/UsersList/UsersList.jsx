import React from 'react';

import User from '../../components/User';
import Loading from '../../components/Loading';

import './UsersList.scss';

const UsersList = ({ users }) => {
  return (
    <section className="users-list" data-testid="user-list">
      {!users.length ? (
        <Loading />
      ) : (
        users.map(({ id, avatar, name, username }, idx) => (
          <User
            key={`user-${id}-${idx}`}
            avatar={avatar}
            name={name}
            username={username}
          />
        ))
      )}
    </section>
  );
};

export default UsersList;
