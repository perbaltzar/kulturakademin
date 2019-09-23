import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
`;

const Icon = props => {
  const { imgsrc } = props;
  return <StyledIcon src={imgsrc} alt="" onClick={props.onClick}></StyledIcon>;
};

export default Icon;
