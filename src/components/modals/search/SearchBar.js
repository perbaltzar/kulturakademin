import React, { useState } from 'react';
import styled from 'styled-components';

import search from '../../../lib/search/search';

const StyledSearchBar = styled.div`
  background-color: ${props => props.theme.orange};
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 30px;
    width: 80vw;
    background-color: transparent;
    border: none;
    border-bottom: solid 2px white;
    font-size: 16px;
    color: white;
    ::placeholder {
      color: white;
    }
  }
`;

const SearchBar = props => {
  const [query, setQuery] = useState('');
  const handleChange = () => {
    search(query);
  };

  return (
    <StyledSearchBar>
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Sök..."
          onChange={({ target }) => {
            setQuery(target.value);
          }}
          onKeyUp={() => handleChange()}
          value={query}
        />
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
