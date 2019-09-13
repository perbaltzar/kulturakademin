import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import styled, { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Home from "./components/views/Home";
import Nav from "./components/modals/Nav";
import VideoSingle from "./components/VideoSingle";
import PoddSingle from "./components/PoddSingle";
import CategorySinglePage from "./components/CategorySinglePage";
import Settings from "./components/views/Settings";
import Favourites from "./components/views/Favourites";
import NotFound from "./components/views/NotFound";
import Menu from "./components/modals/Menu";
import { MenuContext } from "./components/MenuContext";
const StyledApp = styled.div`
  height: 100vh;
`;
const App = () => {
  const [displayMenu, setDisplayMenu] = useState("block");
  return (
    <div className="App">
      <StyledApp>
        <ThemeProvider theme={Theme}>
          <>
            <GlobalStyles />
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/installningar" exact component={Settings} />
                <Route path="/favoriter" exact component={Favourites} />
                <Route path="/video/:id" component={VideoSingle} />
                <Route path="/podd/:id" component={PoddSingle} />
                <Route path="/kategori/:id" component={CategorySinglePage} />
                <Route path="/" component={NotFound} />
              </Switch>
              <MenuContext.Provider value={{ displayMenu, setDisplayMenu }}>
                <Menu />
                <Nav />
              </MenuContext.Provider>
            </Router>
          </>
        </ThemeProvider>
      </StyledApp>
    </div>
  );
};

export default App;
