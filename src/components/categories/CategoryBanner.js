import React from 'react';
import styled from 'styled-components';
import GoBackButton from '../GoBackButton';

const StyledCategoryBanner = styled.div`
  height: 110px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colorDark};
  svg {
    position: absolute;
    left: 25px;
    top: 41px;
  }
  h1::first-letter {
    margin-right: 3px;
  }
  h1 {
    letter-spacing: 2.96px;
    color: ${props => props.theme.colorLight};
    font-weight: 400;
    text-align: center;
  }
`;

const StyledHeaderBox = styled.div`
  position: absolute;
  top: 25px;
  left: 72px;
  height: 45px;
  width: 45px;
  background-color: ${props => props.theme.orange};
  border-radius: 2px;
`;

const CategoryBanner = ({ text }) => {
  return (
    <StyledCategoryBanner>
      <GoBackButton />
      <StyledHeaderBox />
      <h1>Kulturplay</h1>
    </StyledCategoryBanner>
  );
};

export default CategoryBanner;
