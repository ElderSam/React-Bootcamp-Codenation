import React, { useState, useEffect } from 'react';
import { mockUsers } from '../../mockData/users';
import { mockPosts } from '../../mockData/posts';
import { useLocation } from 'react-router-dom';
import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

const ProfileRoute = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const { pathname } = useLocation();
  const [, , thisUsername] = pathname.split('/');

  useEffect(() => {
    const [thisUser] = mockUsers.filter(({ username }) => username === thisUsername);
    setUser(thisUser);
  }, [thisUsername]);

  useEffect(() => {
    if (user) {
      const [userPosts] = mockPosts.filter(([{ userId }]) => userId === user.id);
      setTimeout(() => {
        setPosts(userPosts || []);
      }, 2000);
    }
  }, [user]);

  return (
    <div data-testid="profile-route">
      {user && (
        <UserProfile
          avatar={user.avatar}
          name={user.name}
          username={user.username}
        />
      )}
      {!posts ? <Loading /> : <UserPosts posts={posts} />}
    </div>
  );
};

export default ProfileRoute;