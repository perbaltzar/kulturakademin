import React from 'react';
import styled from 'styled-components';

const StyledTagBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  margin: 20px 0;
  height: 31px;
  background-color: ${props => props.theme.colorDarkGrey};
  color: ${props => props.theme.orange};
  p {
    font: ${props => props.theme.fontMobilePsmall};
  }
`;

const TagBox = props => {
  const { tagName } = props;
  return (
    <StyledTagBox>
      <p>{tagName}</p>
    </StyledTagBox>
  );
};

export default TagBox;
