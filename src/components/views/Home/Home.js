import React, { useContext } from 'react';
import styled from 'styled-components';
import HomeBanner from './HomeBanner';
import { PlayerContext } from '../../Context';
import ContinueWatch from './ContinueWatch';
import ContinueListen from './ContinueListen';
import RecommendationsVideos from './RecommendationsVideos';
import News from './News';
import RecommendationVideo from './RecommendationVideo';
import RecommendationsPods from './RecommendationsPods';

const StyledHome = styled.div`
  overflow: scroll;
  padding-bottom: 100px;
  background-color: ${props => props.theme.colorDark};
`;

const Home = props => {
  const { setNavPath, smallPlayer, setPlayerVisible } = useContext(PlayerContext);
  if (!smallPlayer) setPlayerVisible('none');
  setNavPath(props.match.path);
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
