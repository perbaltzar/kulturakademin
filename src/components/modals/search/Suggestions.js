import React from 'react';
import styled from 'styled-components';
import Line from '../../players/Line';

const StyledSuggestions = styled.div``;

const Suggestions = props => {
  return (
    <StyledSuggestions>
      <h3>Förslag</h3>
      <Line />
    </StyledSuggestions>
  );
};

export default Suggestions;
