import React from 'react';
import styled from 'styled-components';
import Line from '../../players/Line';
const StyledHistory = styled.div``;

const History = props => {
  return (
    <StyledHistory>
      <h3>Sökhistorik</h3>
      <Line />
    </StyledHistory>
  );
};

export default History;
