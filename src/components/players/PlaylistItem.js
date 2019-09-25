import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { PlayerContext } from '../Context';
import ProgressBar from './ProgressBar';
import DescriptionArrow from './DescriptionArrow';

import displayProperTime from '../../lib/displayProperTimer';

const StyledPlaylistItem = styled.div`
  color: ${props => (props.playing ? `${props.theme.orange}` : 'white')};
  section {
    height: 50px;
    margin: 30px 0;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
  }
  section:nth-child(2) {
    height: auto;
    grid-template-columns: 1fr 5fr;
    padding-right: 20px;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
  }
  div:nth-child(2) {
    align-items: flex-start;
  }
  p {
    font-size: 13px;
  }
  h4 {
    margin-top: 5px;
  }
`;

const PlaylistItem = ({ number, img, title, plays, duration, playing, description, id }) => {
  const [open, setOpen] = useState(false);
  const { setMediaId, setPlayerVisible } = useContext(PlayerContext);
  const startPlayer = () => {
    setPlayerVisible('none');
    setTimeout(() => {
      setMediaId(id);
      setPlayerVisible('pod');
    }, 250);
  };
  return (
    <StyledPlaylistItem playing={playing}>
      <section>
        <div onClick={startPlayer}>
          <h4>{number}</h4>
        </div>
        <div onClick={startPlayer}>
          <p>{title}</p>
          <ProgressBar progress={50} />
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
        >
          <p>{displayProperTime(duration)}</p>
          <DescriptionArrow toggleText={open} />
        </div>
      </section>
      {open && (
        <section>
          <div></div>
          <div>
            <p>{description}</p>
          </div>
        </section>
      )}
    </StyledPlaylistItem>
  );
};

export default PlaylistItem;

// Put on the rest
//
