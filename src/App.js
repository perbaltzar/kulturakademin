import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import playlists from "./data/playlists.json";
import youtube from "./data/youtube.json";
import tracks from "./data/tracks.json";
import Home from "./components/views/Home";
import Video from "./components/views/Video";
import VideoSingle from "./components/VideoSingle";

const data = [playlists, youtube, tracks].flat();

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/video" exact component={Video} />
            <Route path="/video/:id" component={VideoSingle} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
