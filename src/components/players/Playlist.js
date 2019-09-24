import React, { useContext } from 'react';
import styled from 'styled-components';
import PlaylistItem from './PlaylistItem';
import { PlayerContext } from '../Context';

const StyledPlaylist = styled.div`
  margin: 20px 0;
  padding-top: 10px;
  background-color: ${props => props.theme.colorDarkGrey};
`;

const Playlist = ({ playlistTracks, number }) => {
  const { mediaId } = useContext(PlayerContext);
  return (
    <StyledPlaylist>
      {playlistTracks.map((track, i) => {
        return (
          <PlaylistItem
            number={i + 1}
            img={track.thumbnail}
            title={track.title}
            duration={track.duration}
            plays="997"
            playing={track.id === mediaId}
            id={track.id}
            description={track.description}
          />
        );
      })}
    </StyledPlaylist>
  );
};

export default Playlist;
