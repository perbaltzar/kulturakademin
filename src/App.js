import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';

import playlists from './data/playlists.json';
import youtube from './data/youtube.json';
import tracks from './data/tracks.json';

const data = [playlists, youtube, tracks].flat();

const App = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [page, setPage] = useState('single-video');
  console.log(data);

  return (
    <div className="App">
      {/* {searchIsOpen && <Search />}
      {menuIsOpen && <Menu />}
      {page === 'single-video' && <VideoPage id={} description={} />}
      <Nav /> */}
    </div>
  );
}

export default App;
