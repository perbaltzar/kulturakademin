import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './styles/Theme';
import Home from './components/views/Home/Home';
import Nav from './components/navbar/Nav';
import VideoSingle from './components/views/VideoSingle';
import VideoPlayer from './components/players/VideoPlayer';
import PodPlayer from './components/players/PodPlayer';
import PodSingle from './components/views/PodSingle';
import CategorySinglePage from './components/categories/CategorySinglePage';
import Settings from './components/views/Settings';
import Favourites from './components/views/Favourites';
import NotFound from './components/views/NotFound';
import Menu from './components/navbar/Menu';
import Search from './components/modals/search/Search';
import About from './components/views/About';
import { MenuContext, PlayerContext, SearchContext } from './components/Context';
import Cookies from './components/modals/Cookies';
import AppModal from './components/modals/AppModal';

const StyledApp = styled.div`
  height: 100vh;
  overflow: ${props => (props.menuOpen === 'block' ? 'hidden' : 'auto')};
  background-color: #141414;
`;

const App = props => {
  const [displayMenu, setDisplayMenu] = useState('none');
  const [toggleMenuAnimation, setToggleMenuAnimation] = useState(true);
  const [toggleSearchAnimation, setToggleSearchAnimation] = useState(true);
  const [playerVisible, setPlayerVisible] = useState('none');
  const [smallPlayer, setSmallPlayer] = useState(false);
  const [cookie, setCookie] = useState(localStorage.getItem('seenCookies'));
  const [mediaId, setMediaId] = useState('');
  const [navPath, setNavPath] = useState('');

  const getLocalStorageVisits = () => {
    let localStorageCounter = localStorage.getItem('numberOfVisits');
    if (localStorageCounter !== null) {
      localStorage.setItem('numberOfVisits', ++localStorageCounter);
      return localStorageCounter;
    }
    localStorage.setItem('numberOfVisits', 1);
    return 1;
  };
  const [numberOfVisits, setNumberOfVisits] = useState(getLocalStorageVisits);

  const getLocalstorageFavourites = () => {
    return JSON.parse(localStorage.getItem('favourites')) || [];
  };
  const [favourites, setFavourites] = useState(getLocalstorageFavourites);
  // Search modal open och close
  const [displaySearch, setDisplaySearch] = useState(false);

  return (
    <StyledApp className="App" {...props} menuOpen={displayMenu}>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Router>
            <SearchContext.Provider
              value={{
                displaySearch,
                setDisplaySearch,
                toggleSearchAnimation,
                setToggleSearchAnimation,
              }}
            >
              <PlayerContext.Provider
                value={{
                  playerVisible,
                  setPlayerVisible,
                  mediaId,
                  setMediaId,
                  smallPlayer,
                  setSmallPlayer,
                  favourites,
                  setFavourites,
                  navPath,
                  setNavPath,
                  numberOfVisits,
                }}
              >
                {numberOfVisits === 3 && <AppModal />}

                {!cookie && <Cookies onClick={() => setCookie(true)} />}
                {displaySearch && <Search />}
                {playerVisible === 'video' && <VideoPlayer />}
                {playerVisible === 'pod' && <PodPlayer id={mediaId} />}
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/installningar" exact component={Settings} />
                  <Route path="/favoriter" exact component={Favourites} />
                  <Route path="/om" exact component={About} />
                  <Route path="/video/:id" component={VideoSingle} />
                  <Route path="/podd/:id" component={PodSingle} />
                  <Route path="/kategori/:id" component={CategorySinglePage} />
                  <Route path="/" component={NotFound} />
                </Switch>
              </PlayerContext.Provider>
              <MenuContext.Provider
                value={{
                  displayMenu,
                  setDisplayMenu,
                  toggleMenuAnimation,
                  setToggleMenuAnimation,
                  navPath,
                  setNavPath,
                }}
              >
                <Menu />
                <Nav />
              </MenuContext.Provider>
            </SearchContext.Provider>
          </Router>
        </>
      </ThemeProvider>
    </StyledApp>
  );
};

export default App;
