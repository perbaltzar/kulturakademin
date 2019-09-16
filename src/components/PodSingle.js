import React from 'react';
import styled from 'styled-components';
import PoddPlayer from './modals/PodPlayer';
const StyledPodSingle = styled.div``;

const PodSingle = props => {
  return (
    <StyledPodSingle>
      <PoddPlayer />
    </StyledPodSingle>
  );
};

export default PodSingle;
