import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';
import Line from '../players/Line';
import Playlist from '../players/Playlist';
import tracks from '../../data/tracks.json';
import playlists from '../../data/playlists.json';
import selectMediaById from '../../lib/search/selectMediaById';
import getTracksFromPlaylist from '../../lib/search/getTracksFromPlaylist';
import CategoryBanner from '../categories/CategoryBanner';
import PodHero from './PodHero';

const StyledPodSingle = styled.div`
  height: 100vh;
  padding-bottom: 80px;
  overflow: scroll;
  background: ${props => props.theme.colorDark};
  section:nth-child(2) {
    padding: 0 20px;
  }
`;

const PodSingle = ({ match }) => {
  const { mediaId, playerVisible, setPlayerVisible } = useContext(PlayerContext);
  const [playlist, setPlaylist] = useState({});
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState({ title: '' });
  const [isPlaying, setIsPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetching playlist from DB
    setPlaylist(selectMediaById(match.params.id, playlists));
    // Fetching tracks from playlist
    setPlaylistTracks(getTracksFromPlaylist(playlist, tracks));
    // Fetching Track info if pod is playing
    if (playerVisible === 'pod') {
      setPlayingTrack(selectMediaById(mediaId.toString(), tracks));
    }
    // SETTING LOADED TIME DONE
    setLoaded(true);
  }, [match.params.id, mediaId, playerVisible, playlist]);

  return (
    <StyledPodSingle>
      {loaded && (
        <>
          <CategoryBanner />
          <PodHero
            onClick={() => setPlayerVisible('pod')}
            trackTitle={playingTrack.title}
            trackPlaying={isPlaying}
            playlistThumbnail={playlist.thumbnail}
            playlistTitle={playlist.title}
          />
          <section></section>
          <Line />
          {playlistTracks.length > 0 && <Playlist playlistTracks={playlistTracks} />}
          <Line />
        </>
      )}
    </StyledPodSingle>
  );
};

export default PodSingle;
