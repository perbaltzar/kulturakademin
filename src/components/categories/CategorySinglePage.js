import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';

import capitalize from '../../lib/capitalize';
import findMediaByCategory from '../../lib/search/findMediaByCategory';

import CategoryBanner from './CategoryBanner';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';

import youtube from '../../data/youtube.json';
import tracks from '../../data/tracks.json';
import playlists from '../../data/playlists.json';
import { PlayerContext } from '../Context';

let data = [youtube, tracks, playlists].flat();
// data = findMediaByCategory('musik', data);

const StyledCategorySinglePage = styled.div`
  background-color: ${props => props.theme.colorDark};
  min-height: 100%;
  padding-bottom: 20px;
  margin-bottom: 60px;
`;

const CategorySingle = ({ match }) => {
  const [category, setCategory] = useState('');
  const [media, setMedia] = useState(data);
  const { smallPlayer, setPlayerVisible } = useContext(PlayerContext);

  useEffect(() => {
    setCategory(match.params.id);
    setMedia(findMediaByCategory(match.params.id, data));
    if (!smallPlayer) setPlayerVisible('none');
  }, [match]);

  return (
    <StyledCategorySinglePage>
      <CategoryBanner text={capitalize(category)} />
      {media.map((media, i) => {
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
        // if (media.type === 'podcast') {
        //   return (
        //     <Pod
        //       key={i}
        //       title={media.title.substr(5, 1000)}
        //       description={media.description && `${media.description.substr(0, 70)}...`}
        //       thumbnail={media.thumbnail}
        //       saved={false}
        //       id={media.id}
        //     />
        //   );
        // }
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
    </StyledCategorySinglePage>
  );
};

export default CategorySingle;
