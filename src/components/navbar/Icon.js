import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.img`
`;

const Icon = ({ imgsrc, onClick }) => {
  return <StyledIcon src={imgsrc} alt="" onClick={onClick}></StyledIcon>;
};

export default Icon;
