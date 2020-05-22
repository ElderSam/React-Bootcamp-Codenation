import React, { useState, useEffect } from 'react';
import { mockUsers } from '../../mockData/users';
import { mockStories } from '../../mockData/stories';
import { mockPosts } from '../../mockData/posts';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

//import { getUsers, getPostsById, getStories } from "../../service"; //para chamar a API

const FeedRoute = () => {

  //definindo as 'propriedades' e os Sets usando React Hooks
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [fetchedPosts, setFetchedPosts] = useState(0);

  const getUserPostById = (postUserId) => users.find(user => postUserId === user.id); //método get que retorna Posts pelo Id do usuário

  //set users
  useEffect(() => { //usando useEffect como willMount (apenas ao criar o componente)
    setUsers(mockUsers); //recebe um JSON
  }, []);

  //set posts
  useEffect(() => {
if (fetchedPosts === users.length) return;
    const postingUserPosts = mockPosts.find(
      ([{ userId }]) => userId === users[fetchedPosts].id
    );

    if (postingUserPosts) {
      setTimeout(() => {
        setPosts([...posts, ...postingUserPosts]);
        setFetchedPosts(fetchedPosts + 1);
      }, 200);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, fetchedPosts]);

  //set stories
  useEffect(() => {
    setStories(mockStories);
  }, [users]);

  /*console.log('getUsers')
  console.log(users);*/

  return (
    <div data-testid="feed-route">
      {(users.length > 0 && Stories.length > 0) && ( //se tiver usuários e stories, então retorna a tela de Stories
        <Stories
          stories={stories} //manda o array de stories
          getUserHandler={getUserPostById}
        />
      )}

      {fetchedPosts !== mockPosts.length //se ainda não retornou os Posts de todos os Usuários
        ? (<Loading />) //mostra mensagem carregando
        : ( //senão mostre os Posts
          <Posts 
            posts={posts} //manda o array de posts
            getUserHandler={getUserPostById}
          />)
      } 
    </div>
  );
};

export default FeedRoute;
