import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Line from '../../players/Line';
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
    </StyledSuggestions>
  );
};

export default Suggestions;
