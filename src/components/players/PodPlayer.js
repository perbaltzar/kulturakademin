import React from 'react';
import styled from 'styled-components';
import { PlayButton, VolumeControl, Progress } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import tracks from '../../data/tracks.json';
// import playlists from '../../data/playlists.json';
console.log(tracks);
// console.log(playlists);

const clientId = "45ca7c7c9b41fdcb2501bb7dd27e168b";
console.log(clientId);
const resolveUrl = 'https://soundcloud.com/user-994747535/129-eeva-bolin-nya-organisation-for-kultur-i-grundskola-och-forskola';

const StyledReactPlayer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  background-color: #1C1C1C;
  button{
    height: 100px;
    width: 100px;
    svg{
      fill: white;
    }
  }
  div{
    height: 10px;
    width: 100%;
  }
`

const Player = withSoundCloudAudio(props => {
  const { track, duration, currentTime } = props;
  return (
        <StyledReactPlayer>
          <PlayButton 
            className="flex-none h4 button button-transparent button-grow rounded"  
            {...props}
          />
          <Progress />
        </StyledReactPlayer>
  );
});


const StyledPodPlayer = styled.div``;


const PodPlayer = props => {
  return (
    <StyledPodPlayer>
      <Player onReady={() => console.log('track is loaded!')} 
        clientId={clientId}
        resolveUrl={resolveUrl}
        imgUrl={"https://i1.sndcdn.com/artworks-000557757795-foa5ie-large.jpg"}
        />
    </StyledPodPlayer>
  );
};

export default PodPlayer;
