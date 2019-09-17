import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';

const StyledPodSingle = styled.div`
  height: 100vh;
  padding-bottom: 100px;
  overflow: scroll;
`;

const PodSingle = ({ match }) => {
  const { setPlayerVisible, setMediaId } = useContext(PlayerContext);
  useEffect(() => {
    setMediaId(match.params.id);
  })
  return (
    <StyledPodSingle>
      <button onClick={() => setPlayerVisible('pod')}>PLAY</button>
    </StyledPodSingle>
  );
};

export default PodSingle;
