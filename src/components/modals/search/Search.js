import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { SearchContext } from '../../Context';

import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Line from '../../players/Line';
import CategoryGrid from '../../categories/CategoryGrid';
import Pod from '../../miniature/Pod';
import Video from '../../miniature/Video';

import search from '../../../lib/search/search';

const StyledSearch = styled.div`
  position: sticky;
  ${props => (props.displaySearch ? 'display: block' : 'display: none')};
  top: 0;
  z-index: 99;
  height: 100vh;
  background-color: ${props => props.theme.colorDark};
  width: 100%;
  padding: 66px 20px 80px 20px;
  h3 {
    color: white;
  }
  p {
    color: white;
  }
`;

const Search = props => {
  const [chosen, setChosen] = useState('a-ö');
  const [results, setResults] = useState([]);
  const [searchDone, setSearchDone] = useState(false);
  const { displaySearch } = useContext(SearchContext);
  const handleChange = query => {
    setResults(search(query));
    console.log(results);
    setSearchDone(true);
  };

  return (
    <>
      <SearchBar handleChange={query => handleChange(query)} />
      <StyledSearch displaySearch={displaySearch}>
        <FilterBar chosen={chosen} onClick={value => setChosen(value)} />
        {searchDone && (
          <>
            <h3>Toppresultat</h3>
            <Line />
            <p>Podd</p>
            <Pod />
            <Line />
            <p>Video</p>
            <Video />><p>Kategorier</p>
            <CategoryGrid gridTemplate="1fr 1fr 1fr" />
          </>
        )}
      </StyledSearch>
    </>
  );
};

export default Search;
