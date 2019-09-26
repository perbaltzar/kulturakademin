import React from 'react';
import styled from 'styled-components';
import Line from '../../players/Line';
const StyledHistory = styled.div`
  p {
    margin: 25px 0;
  }
`;

const History = props => {
  return (
    <StyledHistory>
      <h3>Sökhistorik</h3>
      <Line />
      <p>Scenkonst</p>
      <p>Trumpet</p>
      <p>Hantverk</p>
    </StyledHistory>
  );
};

export default History;
