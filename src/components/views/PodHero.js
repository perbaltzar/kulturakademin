import React, { useContext } from 'react';
import styled from 'styled-components';

import Save from '../miniature/Save';
import { PlayerContext } from '../Context';
import isFavourite from '../../lib/search/isFavourite';
import addToFavourites from '../../lib/addToFavourites';
import ShareIcon from '../ShareIcon';

const StyledPodHero = styled.div`
  padding: 10px 60px 0px 60px;
  margin-bottom: 30px;
  color: white;

  section:nth-child(2) {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    p {
      width: 80%;
    }
  }
  img {
    border-radius: 2px;
    width: 100%;
    margin-bottom: 30px;
  }
  h2 {
    margin: 10px 0;
  }
`;

const PodHero = ({ onClick, playlistThumbnail, playlistTitle, trackTitle, trackPlaying, id }) => {
  const { favourites, setFavourites } = useContext(PlayerContext);

  return (
    <StyledPodHero>
      <section>
        <img onClick={onClick} src={playlistThumbnail} alt="thumbnail" />
        <div>
          <h3>{playlistTitle}</h3>
        </div>
      </section>
      <section>
        <p>{trackTitle}</p>
        <div>
          <ShareIcon marginBottom />
          <Save
            onClick={() => {
              addToFavourites(id, favourites);
              setFavourites(JSON.parse(localStorage.getItem('favourites')));
            }}
            saved={isFavourite(id, favourites)}
          />
        </div>
      </section>
    </StyledPodHero>
  );
};

export default PodHero;
