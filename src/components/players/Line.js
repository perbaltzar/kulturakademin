import React from 'react';
import styled from 'styled-components';

const StyledLine = styled.div`
  background-color: ${props => (props.orange ? props.theme.orange : props.theme.colorLine)};
  height: 2px;
  width: 100%;
  margin: 20px 0px;
  margin-bottom: ${props => (props.marginBotton ? '30px' : '10px')};
`;

const Line = props => {
  return <StyledLine {...props}></StyledLine>;
};

export default Line;
