import React, { useState } from 'react';
import avatarFallback from '../../assets/img/instagram-glyph.png';
import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  const [useFallback, setUseFallback] = useState(false);

  const handleBrokenAvatar = () => {
    setUseFallback(true);
  };

  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img
                onError={handleBrokenAvatar}
                src={!useFallback ? avatar : avatarFallback}
                alt={name}
              />
            </div>
            <p className="user__name">
              {name} <span>@{username}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;