import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  background-color: ${props => (props.orange ? props.theme.orange : props.theme.colorLine)};
  height: 2px;
  width: 100%;
  margin: ${props => (props.margins ? '20px 0px;' : '10px 0 20px 0')};
  ${props => (props.orange ? 'margin-bottom: 25px;' : '')}
`;

const Line = props => {
  return <StyledLine {...props}></StyledLine>;
};

export default Line;
