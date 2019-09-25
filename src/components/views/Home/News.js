import React from 'react';
import styled from 'styled-components';

import VideoThumbnail from './VideoThumbnail';

const StyledNews = styled.div`
  margin-top: 34px;
  h2 {
    color: ${props => props.theme.colorLight};
    margin-bottom: 18px;
  }
  section {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    width: 90vw;
    grid-gap: 10px;
  }
`;

const News = props => {
  return (
    <StyledNews>
      <h2>Nyheter</h2>
      <section>
        <VideoThumbnail />
      </section>
    </StyledNews>
  );
};

export default News;
