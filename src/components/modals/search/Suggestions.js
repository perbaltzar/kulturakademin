import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Line from '../../players/Line';
import playlists from '../../../data/playlists.json';
import youtube from '../../../data/youtube.json';
import Pod from '../../miniature/Pod';
import Video from '../../miniature/Video';
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
from {
  opacity: 1;
}

to {
  opacity: 0;
}
`;
const StyledSuggestions = styled.div`
  animation: ${props =>
    props.animation
      ? css`
          ${fadeOut} 1s ease-in-out forwards
        `
      : css`
          ${fadeIn} 1s ease-in-out forwards
        `};
`;

const Suggestions = props => {
  return (
    <StyledSuggestions {...props}>
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
