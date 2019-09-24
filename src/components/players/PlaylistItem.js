import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { PlayerContext } from '../Context';
import ProgressBar from './ProgressBar';
import DescriptionArrow from './DescriptionArrow';

const StyledPlaylistItem = styled.div`
  color: ${props => (props.playing ? `${props.theme.orange}` : 'white')};
  section {
    height: 45px;
    margin: 30px 0;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  p {
    font-size: 13px;
  }
  h4 {
    margin-top: 5px;
  }
`;

const displayDuration = duration => {
  let seconds = Math.floor(duration / 1000);
  let minutes = Math.floor(seconds / 60);
  seconds -= minutes * 60;
  let time = `${minutes}:${seconds}`;
  return time;
};

const PlaylistItem = ({ number, img, title, plays, duration, playing, description, id }) => {
  const [open, setOpen] = useState(false);
  const { setMediaId, setPlayerVisible } = useContext(PlayerContext);
  return (
    <StyledPlaylistItem playing={playing}>
      <section
        onClick={() => {
          setPlayerVisible('none');
          setTimeout(() => {
            setMediaId(id);
            setPlayerVisible('pod');
          }, 250);
        }}
      >
        <div>
          <h4>{number}</h4>
        </div>
        <div>
          <p>{title}</p>
          <ProgressBar progress={100} />
        </div>
        <div>
          <p>{displayDuration(duration)}</p>
          <DescriptionArrow
            toggleText={open}
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </section>
      {open && (
        <div>
          <p>{description}</p>
        </div>
      )}
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;

// Put on the rest
//
