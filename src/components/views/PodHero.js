import React, { useContext } from 'react';
import styled from 'styled-components';

import Save from '../miniature/Save';
import { PlayerContext } from '../Context';
import isFavourite from '../../lib/search/isFavourite';
import addToFavourites from '../../lib/addToFavourites';
import ShareIcon from '../ShareIcon';

const StyledPodHero = styled.div`
  padding: 10px 20px 0px 50px;
  margin-bottom: 30px;
  color: white;
  div:first-of-type {
    display: flex;
    div {
      align-items: flex-start;
    }
  }
  div:nth-child(2) {
    padding-top: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
  img {
    border-radius: 2px;
    width: 50%;
    margin-right: 10px;
  }
  h2 {
    margin: 10px 0;
  }
`;

const StyledPodHeroPlaying = styled.div`
  padding: 10px 50px 0 50px;

  display: flex;

  h3 {
    color: white;
  }
`;

const PodHero = ({ onClick, playlistThumbnail, playlistTitle, trackTitle, trackPlaying, id }) => {
  const { favourites, setFavourites } = useContext(PlayerContext);

  return (
    <>
      {trackPlaying && (
        <StyledPodHeroPlaying>
          <img onClick={onClick} src={playlistThumbnail} alt="thumbnail" />
          <h2>{playlistTitle}</h2>
          <p>{trackTitle}</p>
        </StyledPodHeroPlaying>
      )}
      {!trackPlaying && (
        <StyledPodHero>
          <div>
            <img onClick={onClick} src={playlistThumbnail} alt="thumbnail" />
            <div>
              <h3>{playlistTitle}</h3>
              <p>{trackTitle}</p>
            </div>
          </div>
          <div>
            <ShareIcon marginRight />
            <Save
              onClick={() => {
                addToFavourites(id, favourites);
                setFavourites(JSON.parse(localStorage.getItem('favourites')));
              }}
              saved={isFavourite(id, favourites)}
            />
          </div>
        </StyledPodHero>
      )}
    </>
  );
};

export default PodHero;
