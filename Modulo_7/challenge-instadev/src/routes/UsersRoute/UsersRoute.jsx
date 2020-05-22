import React, { useState, useEffect } from 'react';
import { mockUsers } from '../../mockData/users';
import UsersList from '../../containers/UsersList/UsersList';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setUsers(mockUsers);
    }, 2000);
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;