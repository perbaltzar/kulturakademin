import React from 'react';
import styled from 'styled-components';

import Line from '../../players/Line';
import Video from '../../miniature/Video';

const StyledVideoResults = styled.div``;

const VideoResults = ({ videos, toggleSearch }) => {
  return (
    <StyledVideoResults>
      <p>Video</p>
      <Line />
      {videos.map((video, i) => {
        return (
          <Video
            key={i}
            id={video.id}
            thumbnail={video.thumbnail}
            description={video.description}
            title={video.title}
            toggleSearch={toggleSearch}
          />
        );
      })}
    </StyledVideoResults>
  );
};

export default VideoResults;
