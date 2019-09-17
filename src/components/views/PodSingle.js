import React, { useContext } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';
const StyledPodSingle = styled.div`
  height: 100vh;
  padding-bottom: 100px;
  overflow: scroll;
`;

const PodSingle = props => {
  const { setPlayerVisible } = useContext(PlayerContext);

  return (
    <StyledPodSingle>
      <button onClick={() => setPlayerVisible('pod')}>PLAY</button>
    </StyledPodSingle>
  );
};

export default PodSingle;
