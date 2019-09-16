import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import PodPlayer from '../players/PodPlayer';
import { PlayerContext } from '../Context';
const StyledPodSingle = styled.div``;

const PodSingle = props => {
  const { playerVisible, setPlayerVisible } = useContext(PlayerContext);
  useEffect(() => {
    setPlayerVisible(true);
  });
  return (
    <StyledPodSingle>
      <PodPlayer />
    </StyledPodSingle>
  );
};

export default PodSingle;
