import React, { useContext } from 'react';
import styled from 'styled-components';
import PageBanner from './PageBanner';
import { PlayerContext } from '../../Context';
import News from './News';
import RecommendationsPods from './RecommendationsPods';
import Line from '../../players/Line';
import CategoryGrid from '../../categories/CategoryGrid';
import RecommendedForYou from './RecommendedForYou';

const StyledHome = styled.div`
  padding-bottom: 100px;
  margin: 0 20px;
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.colorLight};

  .header-box {
    margin: 20px 0;
  }
  .header-image {
    margin-bottom: 10px;
    width: 100%;
    height: auto;
  }
`;

const Home = props => {
  const { setNavPath, smallPlayer, setPlayerVisible, numberOfVisits } = useContext(PlayerContext);
  if (!smallPlayer) setPlayerVisible('none');
  setNavPath(props.match.path);
  return (
    <StyledHome>
      <PageBanner paragraphText={'En playsida för kulturintresserade'} margin={true} />
      <div className="header-box">
        <h5>Kultur ur ett nytt perspektiv</h5>
      </div>
      <img src="/assets/images/home-image.jpg" alt="" className="header-image" />
      <p>Using an agile workstructure with the help of...</p>
      <Line margins />
      <News />
      <Line margins />
      <RecommendationsPods />
      <Line margins />
      {numberOfVisits > 1 && <RecommendedForYou />}
      <div className="header-box">
        <h5>Kategorier</h5>
      </div>
      <CategoryGrid gridTemplate="1fr 1fr 1fr" numberOfCategories={12} />
    </StyledHome>
  );
};

export default Home;
