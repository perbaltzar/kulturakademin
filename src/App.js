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
import { MenuContext, PlayerContext } from './components/Context';

const StyledApp = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.colorDark};
  overflow: ${props => (props.menuOpen === 'block' ? 'hidden' : 'auto')};
`;
const App = props => {
  const [displayMenu, setDisplayMenu] = useState('none');
  const [playerVisible, setPlayerVisible] = useState('none');
  const [smallPlayer, setSmallPlayer] = useState(false);
  const [mediaId, setMediaId] = useState('');

  return (
    <StyledApp className="App" {...props} menuOpen={displayMenu}>
      <ThemeProvider theme={Theme}>
        <>
          <GlobalStyles />
          <Router>
            <PlayerContext.Provider
              value={{ playerVisible, setPlayerVisible, mediaId, setMediaId }}
            >
              {playerVisible === 'video' && <VideoPlayer />}
              {playerVisible === 'pod' && <PodPlayer id={mediaId} />}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/installningar" exact component={Settings} />
                <Route path="/favoriter" exact component={Favourites} />
                <Route path="/video/:id" component={VideoSingle} />
                <Route path="/podd/:id" component={PodSingle} />
                <Route path="/kategori/:id" component={CategorySinglePage} />
                <Route path="/" component={NotFound} />
              </Switch>
            </PlayerContext.Provider>
            <MenuContext.Provider value={{ displayMenu, setDisplayMenu }}>
              <Menu />
              <Nav />
            </MenuContext.Provider>
          </Router>
        </>
      </ThemeProvider>
    </StyledApp>
  );
};

export default App;
