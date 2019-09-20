import React, { useContext } from 'react';
import styled from 'styled-components';

import { SearchContext } from '../../Context';

import SearchBar from './SearchBar';

const StyledSearch = styled.div`
  position: sticky;
  ${props => (props.displaySearch ? 'display: block' : 'display: none')};
  top: 0;
  z-index: 99;
  height: 100vh;
  background-color: ${props => props.theme.colorDark};
  width: 100%;
  div {
  }
`;

const Search = props => {
  const { displaySearch } = useContext(SearchContext);
  return (
    <StyledSearch displaySearch={displaySearch}>
      <SearchBar />
    </StyledSearch>
  );
};

export default Search;
