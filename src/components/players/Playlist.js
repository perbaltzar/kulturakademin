import React from 'react';
import styled from 'styled-components';
import PlaylistItem from './PlaylistItem';
const StyledPlaylist = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: white;
`;

const Playlist = ({ playlistTracks, number }) => {
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
            playing={false}
            id={track.id}
          />
        );
      })}
    </StyledPlaylist>
  );
};

export default Playlist;
