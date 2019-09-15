import React from 'react';
import styled from 'styled-components';

import VideoThumbnail from './VideoThumbnail';

const StyledContinueListen = styled.div`
  margin-top: 34px;
  margin-left: 20px;
  h2 {
    color: ${props => props.theme.orange};
    margin-bottom: 18px;
  }
  section {
    overflow-x: scroll;
    width: 90vw;
  }
  div {
    display: flex;
  }
`;

const ContinueListen = props => {
  return (
    <StyledContinueListen>
      <h2>Fortsätt Lyssna</h2>
      <section>
        <div>
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
        </div>
      </section>
    </StyledContinueListen>
  );
};

export default ContinueListen;
