import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [following, toggleFollowing] = useState(false);
  const [like, toggleLike] = useState(false);

  const { imageUrl, comments } = postInfo;
  const { avatar, name, username } = userInfo;

  const [firstLike] = comments;
  const otherLikes = like ? comments.length : comments.length - 1;

  return (
    <article className="post" data-testid="post">
      <header className="post__header">
        <div className="user">
          <Link to={`/users/${username}`} className="user__thumb">
            <img src={avatar} alt={name} />
          </Link>
          <Link to={`/users/${username}`} className="user__name">
            {name}
          </Link>
        </div>
        <button
          onClick={() => toggleFollowing(!following)}
          className="post__context"
        >
          <span className={`follow-btn ${following ? 'is-following' : ''}`}>
            {following ? 'Seguindo' : 'Seguir'}
          </span>
        </button>
      </header>
      <figure className="post__figure">
        <img src={imageUrl} alt="" />
      </figure>
      {userInfo && (
        <nav className="post__controls">
          <button onClick={() => toggleLike(!like)} className="post__control">
            <i className={`${like ? 'fas' : 'far'} fa-heart`}></i>
          </button>
          {userInfo && comments.length > 0 && (
            <div className="post__status">
              <div className="user">
                <span>
                  curtido por <a href="/">{firstLike.name}</a> e outra
                  {otherLikes > 2 ? 's' : ''}
                  <a href="/">
                    {` ${otherLikes}`} pessoa{otherLikes > 2 ? 's' : ''}.
                  </a>
                </span>
              </div>
            </div>
          )}
        </nav>
      )}
    </article>
  );
};

export default Post;