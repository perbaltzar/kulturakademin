import React, { useContext, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import { SearchContext } from '../../Context';

import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import PodResults from './PodResults';
import VideoResults from './VideoResults';
import NoResults from './NoResults';
import TopResults from './TopResults';
import History from './History';
import Suggestions from './Suggestions';
import SearchCategories from './SearchCategories';
import search from '../../../lib/search/search';
import CategoryGrid from '../../categories/CategoryGrid';

const fadeIn = keyframes`
  from {
    transform: translateY(100vh)
  }

  to {
    transform: translateY(0vh)
  }
`;
const fadeOut = keyframes`
  from {
    transform: translateY(0vh)
  }

  to {
    transform: translateY(100vh)
  }
`;
const StyledSearch = styled.div`
  position: sticky;
  ${props => (props.displaySearch ? 'display: block' : 'display: none')};
  top: 0;
  z-index: 99;
  height: 100vh;
  overflow: scroll;
  background-color: ${props => props.theme.colorDark};
  width: 100%;
  padding-bottom: 80px;
  animation: ${props =>
    props.animation
      ? css`
          ${fadeOut} 0.35s ease-in-out forwards
        `
      : css`
          ${fadeIn} 0.35s ease-in-out forwards
        `};
  article {
    padding: 66px 20px 0 20px;
  }
  h3 {
    color: white;
  }
  p {
    color: white;
  }
  .categories {
    margin: 10px 0;
  }
`;

const Search = props => {
  const [podResults, setPodResults] = useState([]);
  const [videoResults, setVideoResults] = useState([]);
  const [topResults, setTopResults] = useState([]);
  const [results, setResults] = useState([]);
  const [chosen, setChosen] = useState('senaste');
  const [showView, setShowView] = useState('suggestions');
  const { displaySearch, toggleSearchAnimation } = useContext(SearchContext);

  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = query => {
    if (query.length > 0) {
      setSearchQuery(query);
      // All the results
      setResults(search(query));

      if (results.length > 0) {
        setVideoResults(results.filter(result => result.type === 'video'));
        setPodResults(results.filter(result => result.type === 'playlist'));
        setShowView('results');
        setTopResults([results[0]]);
      } else {
        setShowView('no-results');
        setTopResults([]);
      }
    } else {
      // Query is less than 3 characters long and we're showing Seach History
      setShowView('history');
    }
  };

  return (
    <>
      <StyledSearch displaySearch={displaySearch} animation={toggleSearchAnimation}>
        <SearchBar
          handleChange={query => handleChange(query)}
          onFocus={() => {
            setShowView('history');
          }}
        />
        <article>
          {showView === 'suggestions' && <Suggestions animation={toggleSearchAnimation} />}
          {showView === 'history' && <History />}
          {showView === 'results' && (
            <>
              <FilterBar chosen={chosen} onClick={chosenFilter => setChosen(chosenFilter)} />
              {topResults.length > 0 && <TopResults topResults={topResults} />}
              {podResults.length > 0 && <PodResults pods={podResults} />}
              {videoResults.length > 0 && <VideoResults videos={videoResults} />}
              <p className="categories">Kategorier</p>
              <CategoryGrid gridTemplate="1fr 1fr 1fr" numberOfCategories={2} />
            </>
          )}
          {showView === 'no-results' && <NoResults query={searchQuery} />}
        </article>
      </StyledSearch>
    </>
  );
};

export default Search;
