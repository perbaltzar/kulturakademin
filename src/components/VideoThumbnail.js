import React from 'react';
import styled from 'styled-components';

const StyledVideoThumbnail = styled.div`
  margin-right: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 5px;
  }

`;

const VideoThumbnail = props => {
  return (
    <StyledVideoThumbnail>
      <img src="https://dummyimage.com/119x73/000/fff" alt="video" />
      <p>Beskrivningen lägger vi här... </p>
    </StyledVideoThumbnail>
  );
};

export default VideoThumbnail;
