import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  background-color: ${props => props.theme.colorLine};
  height: 2px;
  width: 100%;
`;

const Line = () => {
  return <StyledLine></StyledLine>;
};

export default Line;
