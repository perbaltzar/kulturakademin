import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayButton, Progress } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import tracks from '../../data/tracks.json';
import { PlayerContext } from '../Context';

const clientId = "45ca7c7c9b41fdcb2501bb7dd27e168b";

const StyledMoveButton = styled.button``;

const StyledCloseButton = styled.button``;

const StyledReactPlayer = styled.div`
  position: fixed;
  height: 60px;
  width: 100%;
  background-color: #1C1C1C;
  bottom: 60px;
  z-index: 101;
  div:first-of-type {
    height: 90%;
    width: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center;
  }
  div button{ /* PLAYBUTTON */
    color: white;
    font-size: 20px;
    height: 28px;
    width: 20px;

    svg{
      fill: white;
    }
  }
  div:last-of-type{ /* PROGRESSBAR */
    background-color: ${props => props.theme.orange};
    height: 6px;
    width: ${props => 100*props.currentTime/props.duration}%;
  }
`

const Player = withSoundCloudAudio(props => {
  let { soundCloudAudio, track, duration, currentTime, isReady } = props;
  const { setPlayerVisible } = useContext(PlayerContext);
  const [canAutoPlay, setCanAutoPlay] = useState(true);

  useEffect(() => {
    if (isReady && canAutoPlay){
      soundCloudAudio.play();
      setCanAutoPlay(false);
    }

  }, [isReady, canAutoPlay, soundCloudAudio])
  return (
        <StyledReactPlayer currentTime={currentTime} duration={duration}>
          <div>
            <StyledMoveButton>-15</StyledMoveButton>
            <PlayButton 
              className="flex-none h4 button button-transparent button-grow rounded"  
              {...props}
            />
            <StyledMoveButton>+15</StyledMoveButton>
            <StyledCloseButton onClick={() => setPlayerVisible('none')}>
              <img src="/assets/icons/close.svg" alt="X" />
            </StyledCloseButton>

          </div>
          <Progress 
            duration={track ? track.duration / 1000 : 0} 
            currentTime={currentTime} 
            {...props}
          />
        </StyledReactPlayer>
  );
});


const StyledPodPlayer = styled.div``;


const PodPlayer = ({ id }) => {
  const [isReady, setIsReady] = useState(false);
  const [track, setTrack] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTrack(selectTrack(id, tracks));
    setLoading(false);
  }, [id, track])  

  const selectTrack = (id, tracks) => {
    const newTrack = tracks.filter(track => (track.id.toString() === id))
    return newTrack[0];
  }

  return (
    <StyledPodPlayer>
    {!loading && 
      <Player
        onReady={() => { setIsReady(!isReady) }}
        isReady={isReady}
        clientId={clientId}
        resolveUrl={"https://soundcloud.com/user-994747535/111-i-begynnelsen-var-ordet-ett-samtal-mellan-dramatiker-live-2019-05-17"}
        imgUrl={track.thumbnail}
        />}
    </StyledPodPlayer>
  );
};

export default PodPlayer;
