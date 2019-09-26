import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SearchOrClose from './SearchOrClose';
import { SearchContext } from '../../Context';

const StyledSearchBar = styled.div`
  background-color: ${props => props.theme.orange};
  width: 100%;
  height: 66px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;

  img {
    justify-self: flex-start;
  }
  form {
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
    display: flex;
    div {
      right: 0;
    }
  }
`;

const SearchBar = ({ handleChange, onFocus, toggleSearch }) => {
  const [query, setQuery] = useState('');
  const [magnifying, setMagnifying] = useState(true);

  return (
    <StyledSearchBar>
      <img src="/assets/icons/go-back.svg" alt="back" onClick={() => toggleSearch()} />
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          placeholder="Vad letar du efter?"
          onChange={({ target }) => {
            setQuery(target.value);
            if (target.value.length < 1) setMagnifying(true);
          }}
          onKeyUp={() => {
            handleChange(query);
            if (query.length > 0) setMagnifying(false);
          }}
          value={query}
          onBlur={() => {
            if (query.length < 1) setMagnifying(true);
          }}
          onFocus={onFocus}
        />
        <SearchOrClose magnifying={magnifying} onClick={() => setQuery('')} />
      </form>
    </StyledSearchBar>
  );
};

export default SearchBar;
