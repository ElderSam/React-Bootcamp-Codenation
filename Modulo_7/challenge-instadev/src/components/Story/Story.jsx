import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [elapsedWidth, setElapsedWidth] = useState(null);
  const { videoUrl } = story;
  const { avatar, name, username } = user;

  const handleMetadataLoaded = ({ duration }) => {
    setVideoInfo({
      duration,
    });
  };

  const updateElapsedWidth = useCallback(() => {
    if (videoInfo?.duration && elapsedWidth) {
      const elapsedTime = (elapsedWidth / videoInfo.duration) * 100;

      return `${elapsedTime.toFixed(2)}%`;
    }

    return '0%';
  }, [videoInfo, elapsedWidth]);

  return (
    <section className="story" data-testid="story">
      <article className="container">
        <header className="story__header">
          <div className="user">
            <Link className="user__thumb" to={`/users/${username}`}>
              <img src={avatar} alt={name} />
            </Link>
            <Link className="user__name" to={`/users/${username}`}>
              {name}
            </Link>
          </div>
          <button onClick={handleClose} className="story__close">
            <i className="fas fa-times"></i>
          </button>
        </header>
        <div className="story__progress">
          <div
            className="story__progress__elapsed"
            style={{ width: updateElapsedWidth() }}
          ></div>
        </div>
        <section className="story__video__wrapper">
          <video
            onTimeUpdate={(e) => setElapsedWidth(e.target.currentTime)}
            onLoadedMetadata={(e) => handleMetadataLoaded(e.target)}
            className="video-player"
            autoPlay
            loop
            playsInline
            src={videoUrl}
          ></video>
        </section>
      </article>
    </section>
  );
};

export default Story;