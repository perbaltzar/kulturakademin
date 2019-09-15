import React from 'react';
import styled from 'styled-components';

import PodThumbnail from './PodThumbnail';

const StyledRecommendationsPods = styled.div`
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

const RecommendationsPods = props => {
  return (
    <StyledRecommendationsPods>
      <h2>Rekommenderade Poddar</h2>
      <section>
        <div>
          <PodThumbnail />
          <PodThumbnail />
          <PodThumbnail />
          <PodThumbnail />
          <PodThumbnail />
        </div>
      </section>
    </StyledRecommendationsPods>
  );
};

export default RecommendationsPods;
