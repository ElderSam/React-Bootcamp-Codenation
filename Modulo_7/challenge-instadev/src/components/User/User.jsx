import React, { useState } from 'react';
import avatarFallback from '../../assets/img/instagram-glyph.png';
import { Link } from 'react-router-dom';

const User = ({ avatar, name, username }) => {
  const [useFallback, setUseFallback] = useState(false);

  const handleBrokenAvatar = () => {
    setUseFallback(true);
  };

  return (
    <article className="post" data-testid="user">
      <header className="post__header">
        <Link to={`/users/${username}`} className="user">
          <div className="user__thumb">
            <img
              onError={handleBrokenAvatar}
              src={!useFallback ? avatar : avatarFallback}
              alt={name}
            />
          </div>
          <p className="user__name">{name}</p>
        </Link>
      </header>
    </article>
  );
};

export default User;