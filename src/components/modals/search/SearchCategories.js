import React from 'react';
import styled from 'styled-components';

import Line from '../../players/Line';
import CategoryGrid from '../../categories/CategoryGrid';

const StyledSearchCategories = styled.div`
  p {
    color: white;
  }
`;

const SearchCategories = props => {
  return (
    <StyledSearchCategories>
      <p>Kategorier</p>
      <Line />
      <CategoryGrid gridTemplate="1fr 1fr 1fr" />
    </StyledSearchCategories>
  );
};

export default SearchCategories;
