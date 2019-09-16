import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import YouTube from 'react-youtube';

import { PlayerContext } from "../PlayerContext";

const StyledVideoPlayer = styled.div`
  width: 100vw;
  ${props => props.smallPlayer ? `
  div{
    height: 60px;
    position: fixed;
    bottom: 60px;
  }` 
  : 
  `div{
    background-color: red;
    height: 400px;
  }`
  };
`;

const opts = {
  height: '100%', 
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
}

const VideoPlayer = () => {
  const { playerVisible, setPlayerVisible } = useContext(PlayerContext);
  const [smallPlayer, setSmallPlayer] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  return (
  <StyledVideoPlayer smallPlayer={smallPlayer}>
    <button onClick={() => {setSmallPlayer(!smallPlayer)}}>TOGGLE</button>
    <button onClick={() => {setPlayerVisible(false)}}>CLOSE</button>
    <div>
      <YouTube 
        opts={opts}
        videoId={'M7lc1UVf-VE'}
      />
    </div>
  </StyledVideoPlayer>);
};

export default VideoPlayer;
