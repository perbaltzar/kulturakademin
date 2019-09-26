import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { PlayerContext } from '../Context';
import ProgressBar from './ProgressBar';
import DescriptionArrow from './DescriptionArrow';

import displayProperTime from '../../lib/displayProperTimer';

const StyledPlaylistItem = styled.div`
  color: ${props => (props.playing ? `${props.theme.orange}` : 'white')};
  margin-top: 8px;
  section {
    height: 50px;
    margin: 30px 0;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    p {
      line-height: 20px;
    }
  }
  section:nth-child(2) {
    height: auto;
    grid-template-columns: 1fr 5fr 1fr;
    padding-right: 20px;
    p {
      color: white;
      line-height: 20px;
    }
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
  const { setMediaId, setPlayerVisible, setSmallPlayer } = useContext(PlayerContext);
  const startPlayer = () => {
    setPlayerVisible('none');
    setSmallPlayer(true);
    setTimeout(() => {
      setMediaId(id);
      setPlayerVisible('pod');
    }, 250);
  };
  return (
    <StyledPlaylistItem playing={playing}>
      <section>
        <div onClick={startPlayer}>
          <h2>{number}</h2>
        </div>
        <div onClick={startPlayer}>
          <p>{title.substr(4, title.length - 16)}</p>
          {/* <ProgressBar progress={100 - 50 * (number - 1)} /> */}
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
