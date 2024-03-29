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
import Favourites from './components/views/Favourites';
import NotFound from './components/views/NotFound';
import Menu from './components/navbar/Menu';
import Search from './components/modals/search/Search';
import About from './components/views/About';
import { MenuContext, PlayerContext, SearchContext } from './components/Context';
import Cookies from './components/modals/Cookies';
import AppModal from './components/modals/AppModal';
import AboutApp from './components/views/AboutApp';

const StyledApp = styled.div`
  height: 100vh;
  overflow: ${props => (props.menuOpen === 'block' ? 'hidden' : 'auto')};
  background-color: #141414;
`;

const App = props => {
  // Id of the active media in the player
  const [mediaId, setMediaId] = useState('');

  // Keeping track of current navigation path
  const [navPath, setNavPath] = useState('');

  // Showing search modal
  const [displaySearch, setDisplaySearch] = useState(false);
  const [toggleSearchAnimation, setToggleSearchAnimation] = useState(false);

  // Displaying Menu
  const [displayMenu, setDisplayMenu] = useState('none');
  const [toggleMenuAnimation, setToggleMenuAnimation] = useState(true);

  // Checking if player is visible, none, video or pod
  const [playerVisible, setPlayerVisible] = useState('none');
  const [smallPlayer, setSmallPlayer] = useState(false);

  // Checking if user has accepted cookies
  const [cookie, setCookie] = useState(localStorage.getItem('seenCookies'));

  // Function to get number of visits from local storage
  const getLocalStorageVisits = () => {
    let localStorageCounter = localStorage.getItem('numberOfVisits');
    if (localStorageCounter !== null) {
      localStorage.setItem('numberOfVisits', ++localStorageCounter);
      return localStorageCounter;
    }
    localStorage.setItem('numberOfVisits', 1);
    return 1;
  };
  const [numberOfVisits] = useState(getLocalStorageVisits);

  // Function to get favourites from local storage and saving to state
  const getLocalstorageFavourites = () => {
    return JSON.parse(localStorage.getItem('favourites')) || [];
  };
  const [favourites, setFavourites] = useState(getLocalstorageFavourites);

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
                    <Route path="/favoriter" exact component={Favourites} />
                    <Route path="/om" exact component={About} />
                    <Route path="/video/:id" component={VideoSingle} />
                    <Route path="/podd/:id" component={PodSingle} />
                    <Route path="/kategori/:id" component={CategorySinglePage} />
                    <Route path="/app" component={AboutApp} />
                    <Route path="/" component={NotFound} />
                  </Switch>
                </PlayerContext.Provider>

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
