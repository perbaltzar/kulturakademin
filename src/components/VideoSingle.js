import React,{useEffect, useContext} from "react";
import styled from "styled-components";

import {PlayerContext} from './PlayerContext';

const StyledVideoSingle = styled.div``;

const VideoSingle = props => {
  const { playerVisible, setPlayerVisible } = useContext(PlayerContext)
  useEffect(() => {
    // setSmallPlayer(false);
    setPlayerVisible(true);
    console.log(playerVisible);
    console.log('jhej')
  })
  return (
    <StyledVideoSingle>
      
    </StyledVideoSingle>
  );
};

export default VideoSingle;
