import React from 'react';
import styled from 'styled-components';
import PodPlayer from '../players/PodPlayer';
const StyledPodSingle = styled.div``;

const PodSingle = props => {
  return (
    <StyledPodSingle>
      <PodPlayer />
    </StyledPodSingle>
  );
};

export default PodSingle;
