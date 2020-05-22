import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  //definição de atributos e sets
  const [showStory, toggleShowStory] = useState(false);
  const [selectedStory, setSelectedHistory] = useState({});
  const [selectedProfile, setSelectedProfile] = useState({});
  
  const findStoryById = (id) => stories.find(story => story.id === id);

  const handleStory = (story) => {
    const foundStory = findStoryById(story.id); //filtra os stories pelo id do usuáiro
    const profileData = getUserHandler(story.userId);
    //console.log(profileData);

    setSelectedProfile(profileData);
    setSelectedHistory(foundStory);
    toggleShowStory(!showStory);
  };

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories.map((story, index) => { //percorre o array de stories, e faz o mesmo para cada item
            //const profileData = getUserHandler(story.userId); //pega os dados do usuário
            //console.log(profileData.avatar)
            
            return(
              <button
                key={story.id}
                onClick={() => handleStory(story)}
                className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
              >
                <div className="user__thumb__wrapper">
                  <img src='' alt='exemplo' />
                </div>
              </button>
            )})
          }
        </div>
      </section>

      {showStory && ( //se for true
        <Story 
          story={selectedStory}
          user={selectedProfile}
          handleClose={() => toggleShowStory(!showStory)}
        />
        )}
    </React.Fragment>
  );
};

export default Stories;
