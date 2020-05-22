import React from 'react';

import './UserPosts.scss';
import '../../components/Post/Post.scss';

const UserPosts = ({ posts }) => {
  return (
    <div className="container" data-testid="user-posts">
      <section className="user-posts">
        {!posts.length ? (
          <div className="no-posts">
            <span className="no-posts__content">
              Não há publicações deste usuário
            </span>
            <span className="no-posts__emoji" role="img" aria-label="Emoji Triste">
              😥
            </span>
          </div>
        ) : (
          posts.map(({ id, imageUrl }, idx) => (
            <article key={`post-${id}-${idx}`} className="post">
              <figure className="post__figure">
                <img src={imageUrl} alt="" />
              </figure>
            </article>
          ))
        )}
      </section>
    </div>
  );
};

export default UserPosts;