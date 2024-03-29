import React from 'react';
import styled from 'styled-components';

import Line from '../../players/Line';
import Pod from '../../miniature/Pod';

const StyledPodResults = styled.div``;

const PodResults = ({ pods, toggleSearch }) => {
  return (
    <StyledPodResults>
      <p>Podd</p>
      <Line />
      {pods.map((pod, i) => {
        return (
          <Pod
            key={i}
            id={pod.id}
            thumbnail={pod.thumbnail}
            description={pod.description}
            title={pod.title}
            toggleSearch={toggleSearch}
          />
        );
      })}
    </StyledPodResults>
  );
};

export default PodResults;
