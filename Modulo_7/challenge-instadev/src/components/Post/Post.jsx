import React/*, { useState }*/ from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  console.log(postInfo);
  console.log(userInfo);
  
  return (
    <article className="post">
      <h1>Post 1</h1>
      
      <Link to="/users/1">exemplo</Link>
      
    </article>
  );
};

export default Post;
