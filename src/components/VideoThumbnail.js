import React from 'react';
import styled from 'styled-components';

const StyledVideoThumbnail = styled.div`
  background-color: black;
  margin-right: 10px;
  color: white;
`;

const VideoThumbnail = props => {
  return (
    <StyledVideoThumbnail>
      <img src="https://dummyimage.com/163x119/000/fff" alt="video" />
    </StyledVideoThumbnail>
  );
};

export default VideoThumbnail;
