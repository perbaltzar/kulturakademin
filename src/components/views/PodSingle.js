import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';
import TagGrid from '../miniature/TagGrid';
import Line from '../players/Line';
import Playlist from '../players/Playlist';
import tracks from '../../data/tracks.json';
import playlists from '../../data/playlists.json';
import selectTrackById from '../../lib/search/selectTrackById';

const StyledPodSingle = styled.div`
  height: 100vh;
  padding-bottom: 80px;
  overflow: scroll;
  background: ${props => props.theme.colorDark};
  section:nth-child(2) {
    padding: 0 20px;
  }
`;

const StyledHero = styled.div`
  padding: 50px 50px 0 50px;
  margin-bottom: 30px;
  img {
    width: 100%;
  }
  h2 {
    margin: 10px 0;
    color: white;
  }
  p {
    color: white;
  }
`;

// MOVE THIS TO /lib/ later
const getTracksFromPlaylist = playlist => {
  const newTracks = [];
  if (playlist.trackIds) {
    playlist.trackIds.forEach(id => {
      const track = selectTrackById(id.toString(), tracks);
      newTracks.push(track);
    });
  }
  return newTracks;
};

const PodSingle = ({ match }) => {
  const { mediaId, playerVisible, setPlayerVisible } = useContext(PlayerContext);
  const [playlist, setPlaylist] = useState({});
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState({ title: '' });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetching playlist from DB
    setPlaylist(selectTrackById(match.params.id, playlists));
    // Fetching tracks from playlist
    setPlaylistTracks(getTracksFromPlaylist(playlist));
    // Fetching Track info if pod is playing
    if (playerVisible === 'pod') {
      setPlayingTrack(selectTrackById(mediaId.toString(), tracks));
    }
    // SETTING LOADED TIME DONE
    setLoaded(true);
  }, [match.params.id, mediaId, playerVisible, playlist]);

  return (
    <StyledPodSingle>
      {loaded && (
        <>
          <StyledHero>
            <img onClick={() => setPlayerVisible('pod')} src={playlist.thumbnail} alt="thumbnail" />
            <h2>{playlist.title}</h2>
            <p>{playingTrack.title}</p>
          </StyledHero>
          <section>
            <TagGrid tags={playlist.tags} />
          </section>
          <Line />
          {playlistTracks.length > 0 && <Playlist playlistTracks={playlistTracks} />}
          <Line />
        </>
      )}
    </StyledPodSingle>
  );
};

export default PodSingle;
