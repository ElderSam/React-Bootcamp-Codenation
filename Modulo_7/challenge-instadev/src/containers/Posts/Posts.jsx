import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div className="container" data-testid="posts">
      <section className="feed">
        {posts.length > 0 &&
          posts.map((post, idx) => {
            const { userId } = post;
            const user = getUserHandler(userId);
            return <Post key={`post-${idx}`} postInfo={post} userInfo={user} />;
          })}
      </section>
    </div>
  );
};

export default Posts;