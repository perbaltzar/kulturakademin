import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import CategoryBanner from '../categories/CategoryBanner';
import { PlayerContext } from '../Context';
import tracks from '../../data/tracks.json';
import playlists from '../../data/playlists.json';
import youtube from '../../data/youtube.json';
import selectMediaById from '../../lib/search/selectMediaById';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';
import Line from '../players/Line';

let allMedia = [youtube, tracks, playlists].flat();

const StyledFavourites = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding: 0px 20px 80px 20px;
  height: 100vh;
  color: ${props => props.theme.colorLight};
  div {
    text-align: center;
  }
`;
const StyledGrid = styled.div`
  position: relative;
  top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  align-items: center;
  justify-items: center;
`;
const StyledButton = styled.button`
  width: 163px;
  height: 42px;
  margin-top: 60px;
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.colorLight};
  border-style: none;
`;

const Favourites = props => {
  let data = useContext(PlayerContext);

  let favourites = data.favourites.map(fav => {
    return selectMediaById(fav.id, allMedia);
  });
  if (favourites.length > 0) {
    return (
      <StyledFavourites>
        <CategoryBanner text="Favoriter"></CategoryBanner>
        {favourites.map((media, i) => {
          if (media.type === 'video') {
            return (
              <Video
                key={i}
                title={media.title}
                // description={media.description && `${media.description.substr(0, 70)}...`}
                thumbnail={media.thumbnail}
                saved={false}
                id={media.id}
              />
            );
          }
          if (media.type === 'playlist') {
            return (
              <Pod
                id={media.id}
                key={i}
                title={media.title}
                description={media.description && `${media.description.substr(0, 70)}...`}
                thumbnail={media.thumbnail}
                saved={false}
                playlistTracks={media.trackIds}
              />
            );
          }
          return <></>;
        })}
      </StyledFavourites>
    );
  }
  return (
    <StyledFavourites>
      <CategoryBanner />
      <h3>Favoriter</h3>
      <Line />
      <StyledGrid>
        <img src="/assets/icons/heart.svg" alt="" />
        <h3>Du har inte sparat något ännu.</h3>
        <div>
          <p>Oroa dig inte, det är lätt. Klicka bara på hjärtat</p>
          <p> vid önskade spår så visas de här.</p>
        </div>
        <StyledButton>
          <p>Sök video och podd</p>
        </StyledButton>
      </StyledGrid>
    </StyledFavourites>
  );
};

export default Favourites;
