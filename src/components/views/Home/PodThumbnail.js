import React from 'react';
import styled from 'styled-components';

const StyledPodThumbnail = styled.div`
  margin-right: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 5px;
  }

`;

const PodThumbnail = props => {
  return (
    <StyledPodThumbnail>
      <img src="https://dummyimage.com/76x76/000/fff" alt="video" />
      <p>Text lägger vi här... </p>
    </StyledPodThumbnail>
  );
};

export default PodThumbnail;
