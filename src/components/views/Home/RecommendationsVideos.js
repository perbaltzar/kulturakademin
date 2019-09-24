import React from 'react';
import styled from 'styled-components';

import VideoThumbnail from './VideoThumbnail';

const StyledRecommendationsVideos = styled.div`
  margin-top: 34px;
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

const RecommendationsVideos = props => {
  return (
    <StyledRecommendationsVideos>
      <h2>Rekommenderat</h2>
      <section>
        <div>
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
          <VideoThumbnail />
        </div>
      </section>
    </StyledRecommendationsVideos>
  );
};

export default RecommendationsVideos;
