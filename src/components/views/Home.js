import React from 'react';
import styled from 'styled-components';
import HomeBanner from '../HomeBanner';
import ContinueWatch from '../ContinueWatch';
const StyledHome = styled.div``;

const Home = props => {
  return (
    <StyledHome>
      <HomeBanner />
      <ContinueWatch />
      {/* <News />
      <Recommendations />
      <ContinueListen />
      <RecommendationVideo />
      <RecommendationsPods /> */}
    </StyledHome>
  );
};

export default Home;
