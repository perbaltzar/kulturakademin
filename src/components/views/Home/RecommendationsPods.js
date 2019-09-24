import React from 'react';
import styled from 'styled-components';

import PodThumbnail from './PodThumbnail';

const StyledRecommendationsPods = styled.div`
  margin-top: 34px;
  margin-bottom: 20px;
  h2 {
    color: ${props => props.theme.colorLight};
    margin-bottom: 18px;
  }
  section {
    overflow-x: scroll;
    width: 90vw;
  }
  div {
    display: flex;
  }
  .header-box {
    margin: 20px 0;
  }
`;

const RecommendationsPods = props => {
  return (
    <StyledRecommendationsPods>
      <div className="header-box">
        <h5>Poddar som inspirerar</h5>
      </div>
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
