import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayButton, Progress } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';
import tracks from '../../data/tracks.json';
import { PlayerContext } from '../Context';

import selectMediaById from '../../lib/search/selectMediaById';
import displayProperTime from '../../lib/displayProperTimer';

const clientId = '45ca7c7c9b41fdcb2501bb7dd27e168b';

const StyledMoveButton = styled.button``;

const StyledCloseButton = styled.button``;

const StyledReactPlayer = styled.div`
  border-top: 2px solid ${props => props.theme.colorLine};
  position: fixed;
  height: 70px;
  width: 100%;
  background-color: #1c1c1c;
  bottom: 60px;
  z-index: 101;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* CONTROLLER CONTAINER */
  div:first-of-type {
    padding-bottom: 5px;
    span {
      width: 20px;
    }
    height: 52px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }
  div button {
    /* PLAYBUTTON */
    background-color: transparent;
    border: 0;
    color: white;
    font-size: 20px;
    height: 28px;
    width: 20px;

    svg {
      fill: white;
    }
  }
  div:nth-child(2) {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    color: white;
  }
  div:last-of-type {
    /* PROGRESSBAR */
    background-color: ${props => props.theme.orange};
    height: 6px;
    width: ${props => (100 * props.currentTime) / props.duration}%;
  }
`;

const Player = withSoundCloudAudio(props => {
  let { soundCloudAudio, track, duration, currentTime, isReady } = props;
  const { setPlayerVisible } = useContext(PlayerContext);
  const [canAutoPlay, setCanAutoPlay] = useState(true);

  useEffect(() => {
    if (isReady && canAutoPlay) {
      soundCloudAudio.play();
      setCanAutoPlay(false);
    }
  }, [isReady, canAutoPlay, soundCloudAudio]);
  return (
    <StyledReactPlayer currentTime={currentTime} duration={duration}>
      <div>
        <span></span>
        <StyledMoveButton>
          <img src="/assets/icons/15back.svg" alt="-15" />
        </StyledMoveButton>
        <PlayButton
          className="flex-none h4 button button-transparent button-grow rounded"
          {...props}
        />
        <StyledMoveButton>
          <img src="/assets/icons/15forward.svg" alt="+15" />
        </StyledMoveButton>
        <StyledCloseButton onClick={() => setPlayerVisible('none')}>
          <img src="/assets/icons/close.svg" alt="X" />
        </StyledCloseButton>
      </div>
      <div>
        <p>{displayProperTime(currentTime * 1000)}</p>
        <p>{displayProperTime(duration * 1000)}</p>
      </div>
      <Progress duration={track ? track.duration / 1000 : 0} currentTime={currentTime} {...props} />
    </StyledReactPlayer>
  );
});

const StyledPodPlayer = styled.div``;

const PodPlayer = ({ id }) => {
  const [isReady, setIsReady] = useState(false);
  const [track, setTrack] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTrack(selectMediaById(id.toString(), tracks));
    setLoaded(true);
  }, [id, track]);

  return (
    <StyledPodPlayer>
      {loaded && (
        <Player
          onReady={() => {
            setIsReady(!isReady);
          }}
          isReady={isReady}
          clientId={clientId}
          resolveUrl={track.trackUrl}
        />
      )}
    </StyledPodPlayer>
  );
};

export default PodPlayer;
