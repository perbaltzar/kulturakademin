import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../../Context';
import PodThumbnail from './PodThumbnail';
import playlists from '../../../data/playlists.json';

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
    div {
      display: flex;
    }
  }
  .header-box {
    margin: 20px 0;
  }
`;

const RecommendationsPods = props => {
  const { numberOfVisits } = useContext(PlayerContext);
  return (
    <StyledRecommendationsPods>
      <div className="header-box">
        {numberOfVisits > 1 ? <h5>Fortsätt Lyssna</h5> : <h5>Poddar som inspirerar</h5>}
      </div>
      <section>
        <div>
          <PodThumbnail thumbnail={playlists[1].thumbnail} title={playlists[1].title} />
          <PodThumbnail thumbnail={playlists[2].thumbnail} title={playlists[2].title} />
        </div>
      </section>
    </StyledRecommendationsPods>
  );
};

export default RecommendationsPods;
