import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import YouTube from '@u-wave/react-youtube';

import { PlayerContext } from '../Context';

const StyledVideoPlayer = styled.div`
  width: 100vw;
  margin: 0 auto;
  color: ${props => props.theme.colorLight}
    ${props =>
      props.smallPlayer
        ? `
  div{
    height: 90px;
    position: fixed;
    bottom: 70px;
    left: 10px;
    border-radius: 8px;
    border: 1px solid transparent;
    max-width: 160px;
  }`
        : `div{
    height: 211px;
    width: 100%;
  }`};
`;

const VideoPlayer = () => {
  const { playerVisible, setPlayerVisible } = useContext(PlayerContext);
  const [smallPlayer, setSmallPlayer] = useState(false);

  return (
    <StyledVideoPlayer smallPlayer={smallPlayer}>
      <button
        onClick={() => {
          setSmallPlayer(!smallPlayer);
        }}
      >
        TOGGLE
      </button>
      <button
        onClick={() => {
          setPlayerVisible(false);
        }}
      >
        CLOSE
      </button>
      <div>
        <YouTube
          width="100%"
          height="100%"
          showInfo={false}
          annotations={false}
          video={'M7lc1UVf-VE'}
          modestBranding={true}
        />
      </div>
    </StyledVideoPlayer>
  );
};

export default VideoPlayer;
