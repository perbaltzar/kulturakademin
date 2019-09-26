import React from 'react';
import styled from 'styled-components';

import Pod from '../../miniature/Pod';
import Video from '../../miniature/Video';
import Line from '../../players/Line';

const StyledTopResults = styled.div``;

const TopResults = ({ topResults, toggleSearch }) => {
  return (
    <StyledTopResults>
      <h3>Toppresultat</h3>
      <Line />
      {topResults.map((top, i) => {
        if (top.type === 'video') {
          return (
            <Video
              key={i}
              id={top.id}
              title={top.title}
              description={top.description}
              thumbnail={top.thumbnail}
              toggleSearch={toggleSearch}
            />
          );
        }
        if (top.type === 'playlist') {
          return (
            <Pod
              key={i}
              id={top.id}
              title={top.title}
              description={top.description}
              thumbnail={top.thumbnail}
              toggleSearch={toggleSearch}
            />
          );
        }
        return <></>;
      })}
    </StyledTopResults>
  );
};

export default TopResults;
