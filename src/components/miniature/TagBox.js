import React from 'react';
import styled from 'styled-components';

const StyledTagBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  padding: 0 15px;
  background-color: ${props => props.theme.colorDarkGrey};
  color: ${props => props.theme.orange};
  p {
    font: ${props => props.theme.fontMobilePsmall};
  }
`;

const TagBox = ({ text }) => {
  return (
    <StyledTagBox>
      <p>{text}</p>
    </StyledTagBox>
  );
};

export default TagBox;
