import React from 'react';
import styled from 'styled-components';
import { PlayButton, Timer } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import tracks from '../../data/tracks.json';
import playlists from '../../data/playlists.json';
// console.log(tracks);
// console.log(playlists);
// const clientId = 'YOUR CLIENT ID';
// const resolveUrl = 'https://soundcloud.com/ksmtk/chronemics';
const Player = withSoundCloudAudio(props => {
  let { track, currentTime } = props;
  return (
    <div className="custom-player">
      <PlayButton
        className="custom-player-btn"
        onPlayClick={() => {
          console.log('play button clicked!');
        }}
        {...props}
      />
      <h2 className="custom-player-title">{track ? track.title : 'Loading...'}</h2>
      <Timer
        className="custom-player-timer"
        duration={track ? track.duration / 1000 : 0}
        currentTime={currentTime}
        {...props}
      />
    </div>
  );
});
const StyledPodPlayer = styled.div``;
const PodPlayer = props => {
  return (
    <StyledPodPlayer>
      <Player onReady={() => console.log('track is loaded!')} />
    </StyledPodPlayer>
  );
};

export default PodPlayer;
