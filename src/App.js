import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Home from "./components/views/Home";
import Nav from "./components/modals/Nav";
import VideoSingle from "./components/VideoSingle";
import VideoPlayer from './components/modals/VideoPlayer';
import PodPlayer from './components/modals/PodPlayer';
import PoddSingle from "./components/PoddSingle";
import CategorySinglePage from "./components/CategorySinglePage";
import Settings from "./components/views/Settings";
import Favourites from "./components/views/Favourites";
import NotFound from "./components/views/NotFound";
import Menu from "./components/modals/Menu";
import { MenuContext } from "./components/MenuContext";
import { PlayerContext } from "./components/PlayerContext";

const StyledApp = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.colorDark};
`;
const App = () => {
  const [displayMenu, setDisplayMenu] = useState("none");
  const [playerVisible, setPlayerVisible] = useState(false);

  return (
   
      <StyledApp className="App">
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyles />
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/installningar" exact component={Settings} />
                <Route path="/favoriter" exact component={Favourites} />
                <PlayerContext.Provider value ={{ playerVisible, setPlayerVisible }} >
                  <Route path="/video/:id" component={VideoSingle} />
                </PlayerContext.Provider>
                <Route path="/podd/:id" component={PoddSingle} />
                <Route path="/kategori/:id" component={CategorySinglePage} />
                <Route path="/" component={NotFound} />
              </Switch>
              <PlayerContext.Provider value ={{ playerVisible, setPlayerVisible }} >
                {playerVisible && <VideoPlayer />}
                {/* <PodPlayer /> */}
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
