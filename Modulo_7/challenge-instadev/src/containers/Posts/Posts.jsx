import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => {
  console.log(posts)
  console.log(getUserHandler);

  return(
    <div className="container">
      <h1>Posts</h1>
    <Post />
  </div>
  );


};

export default Posts;
