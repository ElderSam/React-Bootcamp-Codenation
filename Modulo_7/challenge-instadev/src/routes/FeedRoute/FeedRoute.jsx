import React/*, { useState, useEffect }*/ from 'react';
/*
import Stories from '../../containers/Stories';*/
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  return (
    <div>
      <h1>FeedRoute</h1>
      <Loading />
      <Posts />
    </div>
  );
};

export default FeedRoute;
