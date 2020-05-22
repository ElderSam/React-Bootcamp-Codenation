import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  //definição de atributos e sets
  const [selectedStory, setSelectedStory] = useState(null);

  const handleStorySelection = (story, user) => {
    setSelectedStory({ story, user });
  };

  const handleStoryClosing = () => {
    setSelectedStory(null);
  };

  
  return (
    <>
      <section className="stories" data-testid="stories">
        <nav className="container">
          {stories.map((story, idx) => {
            const user = getUserHandler(story.userId);
            return (
              <button
                key={`story-${story.id}`}
                onClick={() => handleStorySelection(story, user)}
                className={`user__thumb ${idx === 0 && 'user__thumb--hasNew'}`}
              >
                <div className="user__thumb__wrapper">
                  <img src={user.avatar} alt={user.name} />
                </div>
              </button>
            );
          })}
        </nav>
      </section>

      {selectedStory && (
        <Story
          story={selectedStory.story}
          user={selectedStory.user}
          handleClose={handleStoryClosing}
        />
      )}
    </>
  );
};

export default Stories;
