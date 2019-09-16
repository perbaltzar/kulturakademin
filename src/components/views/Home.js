import React from 'react';
import styled from 'styled-components';

import HomeBanner from '../HomeBanner';
import ContinueWatch from '../ContinueWatch';
import ContinueListen from '../ContinueListen';
import RecommendationsVideos from '../RecommendationsVideos';
import News from '../News';
import RecommendationVideo from '../RecommendationVideo';
import RecommendationsPods from '../RecommendationsPods';

const StyledHome = styled.div`
  overflow: scroll;
  ${props => props.theme.viewsBottomMargin}
  background-color: ${props => props.theme.colorDark};
`;

const Home = props => {
  return (
    <StyledHome>
      <HomeBanner />
      <ContinueWatch />
      <News />
      <RecommendationsVideos />
      <ContinueListen />
      <RecommendationVideo />
      <RecommendationsPods />
      {/* Put Categories here */}
    </StyledHome>
  );
};

export default Home;
