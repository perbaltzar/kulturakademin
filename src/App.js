import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import Home from "./components/views/Home";
import Nav from "./components/modals/Nav";
import VideoSingle from "./components/VideoSingle";
import PoddSingle from "./components/PoddSingle";
import CategorySingle from "./components/CategorySingle";
import Settings from "./components/views/Settings";
import Favourites from "./components/views/Favourites";
import NotFound from "./components/views/NotFound";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/installningar" exact component={Settings} />
            <Route path="/favoriter" exact component={Favourites} />
            <Route path="/video/:id" component={VideoSingle} />
            <Route path="/podd/:id" component={PoddSingle} />
            <Route path="/kategori/:id" component={CategorySingle} />
            <Route path="/" component={NotFound} />
          </Switch>
          <Nav />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
