import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import YouTube from '@u-wave/react-youtube';
import videos from '../../data/youtube.json';
import CategoryBanner from '../categories/CategoryBanner';
import { PlayerContext } from '../Context';
import selectMediaById from '../../lib/search/selectMediaById.js';
import Icon from '../navbar/Icon.js';

const StyledVideoPlayer = styled.div`
  width: 100vw;
  margin: 0 auto;
  color: ${props => props.theme.colorLight};
  .small-player-container {
    display: grid;
    grid-template-columns: 3fr 3fr 1fr;
    width: 100%;
    height: 90px;
    background-color: ${props => props.theme.colorDark};
    z-index: 9;
    position: fixed;
    bottom: 60px;
  }
  .small-player {
    height: 90px;
    border-radius: 8px;
  }
  .video-text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .large-player {
    height: 211px;
    width: 100%;
  }
  .close-video {
    display: flex;
    align-items: center;
    justify-content: centeR;
  }
`;

const VideoPlayer = () => {
  const { mediaId, setPlayerVisible, smallPlayer, setSmallPlayer } = useContext(PlayerContext);
  const videoData = selectMediaById(mediaId, videos);
  const pageurl = window.location.pathname;

  return (
    <StyledVideoPlayer smallPlayer={smallPlayer}>
      <CategoryBanner />
      <button
        onClick={() => {
          setSmallPlayer(!smallPlayer);
        }}
      >
        TOGGLE
      </button>
      {smallPlayer ? (
        <div className="small-player-container">
          <div className="small-player">
            <YouTube
              width="100%"
              height="100%"
              showInfo={false}
              annotations={false}
              video={mediaId}
              modestBranding={true}
            />
          </div>
          <div className="video-text">
            <p>{videoData.title}</p>
          </div>
          <div className="close-video">
            <Icon
              imgsrc="/assets/icons/cross.svg"
              onClick={() => {
                if (pageurl !== `/video/${mediaId}`) {
                  setPlayerVisible('none');
                }
                setSmallPlayer(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="large-player">
          <YouTube
            width="100%"
            height="100%"
            showInfo={false}
            annotations={false}
            video={mediaId}
            modestBranding={true}
          />
        </div>
      )}
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;
