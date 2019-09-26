import React from 'react';
import styled from 'styled-components';
import Line from '../../players/Line';
import playlists from '../../../data/playlists.json';
import youtube from '../../../data/youtube.json';
import Pod from '../../miniature/Pod';
import Video from '../../miniature/Video';

const StyledSuggestions = styled.div``;

const Suggestions = props => {
  return (
    <StyledSuggestions>
      <h3>Förslag</h3>
      <Line />
      <Video
        title={youtube[3].title}
        // description={media.description && `${media.description.substr(0, 70)}...`}
        thumbnail={youtube[3].thumbnail}
        saved={false}
        id={youtube[3].id}
      />
      <Pod
        title={playlists[7].title}
        // description={media.description && `${media.description.substr(0, 70)}...`}
        thumbnail={playlists[7].thumbnail}
        saved={false}
        id={playlists[7].id}
      />
    </StyledSuggestions>
  );
};

export default Suggestions;
