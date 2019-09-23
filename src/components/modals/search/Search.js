import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { SearchContext } from '../../Context';

import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import Line from '../../players/Line';
import CategoryGrid from '../../categories/CategoryGrid';
import Pod from '../../miniature/Pod';
import Video from '../../miniature/Video';
import NoResults from './NoResults';
import TopResults from './TopResults';
import History from './History';
import Suggestions from './Suggestions';
import search from '../../../lib/search/search';

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
  section {
    padding: 66px 20px 0 20px;
  }
  h3 {
    color: white;
  }
  p {
    color: white;
  }
`;

const Search = props => {
  const [podResults, setPodResults] = useState([]);
  const [videoResults, setVideoResults] = useState([]);
  const [topResults, setTopResults] = useState([]);
  const [results, setResults] = useState([]);

  const [chosen, setChosen] = useState('a-ö');

  const [showView, setShowView] = useState('suggestions');

  const { displaySearch } = useContext(SearchContext);

  const [searchQuery, setSearchQuery] = useState('');
  const handleChange = query => {
    console.log(query);
    if (query.length > 0) {
      setSearchQuery(query);
      // All the results
      setResults(search(query));

      setVideoResults(results.filter(result => result.type === 'video'));

      setPodResults(results.filter(result => result.type === 'playlist'));
      if (results.length > 0) {
        setShowView('results');
        setTopResults([results[0], results[1]]);
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
      <StyledSearch displaySearch={displaySearch}>
        <SearchBar
          handleChange={query => handleChange(query)}
          onFocus={() => {
            setShowView('history');
          }}
        />
        <section>
          {showView === 'suggestions' && <Suggestions />}
          {showView === 'history' && <History />}
          {showView === 'results' && (
            <>
              <FilterBar chosen={chosen} onClick={chosenFilter => setChosen(chosenFilter)} />
              {topResults.length > 0 && <TopResults topResults={topResults} />}
              <Line />

              <p>Podd</p>
              {podResults.length > 0 &&
                podResults.map((pod, i) => {
                  return (
                    <Pod
                      key={i}
                      id={pod.id}
                      thumbnail={pod.thumbnail}
                      description={pod.description}
                      title={pod.title}
                    />
                  );
                })}
              <Line />
              <p>Video</p>

              {videoResults.length > 0 &&
                videoResults.map((video, i) => {
                  return (
                    <Video
                      key={i}
                      id={video.id}
                      thumbnail={video.thumbnail}
                      description={video.description}
                      title={video.title}
                    />
                  );
                })}
              <p>Kategorier</p>
              <CategoryGrid gridTemplate="1fr 1fr 1fr" />
              <Line />
            </>
          )}
          {showView === 'no-results' && <NoResults query={searchQuery} />}
        </section>
      </StyledSearch>
    </>
  );
};

export default Search;
