import React from 'react';
import styled from 'styled-components';

const StyledCategoryHeadline = styled.h2`
  color: white;
`;

const CategoryHeadline = ({ text }) => {
  return <StyledCategoryHeadline>{text}</StyledCategoryHeadline>;
};

export default CategoryHeadline;
