import React, { useEffect, useState } from "react";
import styled from "styled-components";

import capitalize from '../lib/capitalize';
import findMediaByCategory from '../lib/search/findMediaByCategory';

import CategoryBanner from './CategoryBanner';
import Video from './Video';
import Pod from './Pod';

import youtube from '../data/youtube.json';
import tracks from '../data/tracks.json';
import playlists from '../data/playlists.json';

let data = [youtube, tracks, playlists].flat();
data = findMediaByCategory('musik', data);

const StyledCategorySinglePage = styled.div`
  background-color: ${props => props.theme.colorDark};
  min-height: 100%;
`;

const CategorySingle = ({match}) => {
  const [category, setCategory] = useState('');
  const [media] = useState(data);
  
  useEffect(() => {
      setCategory(match.params.id);
  }, [match])
  
  return (
    <StyledCategorySinglePage>
      <CategoryBanner text={capitalize(category)} />
      {media.map((media, i) => {
        if (media.type === 'video'){
          return (
            <Video 
              key={i}
              title={media.title}
              description={media.description && `${media.description.substr(0, 100)}...`}
              thumbnail={media.thumbnail}
              saved={false}
            />
          )
        }else if(media.type === 'podcast'){
          return (
            <Pod 
              key={i}
              title={media.title}
              description={media.description && `${media.description.substr(0, 100)}...`}
              thumbnail={media.thumbnail}
              saved={false}
            />
            )
          }else if (media.type === 'playlist'){
            return (
            <Pod 
              key={i}
              title={media.title}
              description={media.description && `${media.description.substr(0, 100)}...`}
              thumbnail={media.thumbnail}
              saved={false}
            />)
          }
        })
      }
    </StyledCategorySinglePage>
  );
};

export default CategorySingle;
