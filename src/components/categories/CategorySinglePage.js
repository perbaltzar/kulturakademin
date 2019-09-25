import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import capitalize from '../../lib/capitalize';
import findMediaByCategory from '../../lib/search/findMediaByCategory';

import PageBanner from '../views/Home/PageBanner';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';
import CategoryHeadline from './CategoryHeadline';
import Line from '../players/Line';
import FilterBar from '../modals/search/FilterBar';

import youtube from '../../data/youtube.json';
import tracks from '../../data/tracks.json';
import playlists from '../../data/playlists.json';
import { PlayerContext } from '../Context';

let data = [youtube, tracks, playlists].flat();

const StyledCategorySinglePage = styled.div`
  background-color: ${props => props.theme.colorDark};
  min-height: 100%;
  padding: 0px 20px;
  margin-bottom: 60px;
  p {
    color: white;
  }
`;

const CategorySinglePage = ({ match }) => {
  const [category, setCategory] = useState('');
  const [media, setMedia] = useState(data);
  const [chosen, setChosen] = useState('a-ö');
  const { smallPlayer, setPlayerVisible } = useContext(PlayerContext);

  useEffect(() => {
    setCategory(match.params.id);
    setMedia(findMediaByCategory(match.params.id, data));
    if (!smallPlayer) setPlayerVisible('none');
  }, [match, smallPlayer, setPlayerVisible]);

  return (
    <>
      <PageBanner />
      <StyledCategorySinglePage>
        <FilterBar chosen={chosen} onClick={chosenFilter => setChosen(chosenFilter)} />
        <CategoryHeadline text={capitalize(category)} />
        <Line orange />
        <p>Video</p>
        <Line />
        {media.map((media, i) => {
          if (media.type === 'video') {
            return (
              <Video
                key={i}
                title={media.title}
                thumbnail={media.thumbnail}
                saved={false}
                id={media.id}
              />
            );
          }
          return <></>;
        })}
        <p>Podd</p>
        <Line />
        {media.map((media, i) => {
          if (media.type === 'playlist') {
            return (
              <Pod
                id={media.id}
                key={`${i}`}
                title={media.title}
                thumbnail={media.thumbnail}
                saved={false}
                playlistTracks={media.trackIds}
              />
            );
          }
          return <></>;
        })}
      </StyledCategorySinglePage>
    </>
  );
};

export default CategorySinglePage;
