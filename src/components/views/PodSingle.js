import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { PlayerContext } from '../Context';
import Line from '../players/Line';
import Playlist from '../players/Playlist';
import tracks from '../../data/tracks.json';
import youtube from '../../data/youtube.json';
import playlists from '../../data/playlists.json';
import selectMediaById from '../../lib/search/selectMediaById';
import getTracksFromPlaylist from '../../lib/search/getTracksFromPlaylist';
import PageBanner from '../views/Home/PageBanner';
import PodHero from './PodHero';
import FilterBar from '../modals/search/FilterBar';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';

const StyledPodSingle = styled.div`
  height: 100vh;
  padding-bottom: 60px;
  ${props => (props.podPlayer ? 'padding-bottom: 100px' : '')}
  overflow: scroll;
  background: ${props => props.theme.colorDark};
  color: white;
`;

const StyledFilterSection = styled.div`
  padding: 30px 20px;
  h3 {
    margin-top: 50px;
  }
`;

const PodSingle = ({ match }) => {
  const { mediaId, playerVisible, setPlayerVisible, smallPlayer } = useContext(PlayerContext);
  const [playlist, setPlaylist] = useState({});
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState({ title: '' });
  const [isPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [chosenFilter, setChosenFilter] = useState('senaste');

  if (!smallPlayer && playerVisible !== 'pod') setPlayerVisible('none');

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
    <StyledPodSingle podPlayer={playerVisible === 'pod'}>
      {loaded && (
        <>
          <PageBanner />
          <PodHero
            onClick={() => setPlayerVisible('pod')}
            trackTitle={playingTrack.title}
            trackPlaying={isPlaying}
            playlistThumbnail={playlist.thumbnail}
            playlistTitle={playlist.title}
            id={playlist.id}
          />
          {playlistTracks.length > 0 && <Playlist playlistTracks={playlistTracks} />}
          <StyledFilterSection>
            <Link to="/tack">
              <h3>Förslag</h3>
            </Link>
            <Line orange />
            <FilterBar
              chosen={chosenFilter}
              onClick={chosenFilter => setChosenFilter(chosenFilter)}
            />
            <p>Video</p>
            <Line />
            <Video title={youtube[0].title} thumbnail={youtube[0].thumbnail} id={youtube[0].id} />
            <p>Podd</p>
            <Line />
            <Pod
              title={playlists[0].title}
              thumbnail={playlists[0].thumbnail}
              saved={false}
              id={playlists[0].id}
            />
            <Pod
              title={playlists[1].title}
              thumbnail={playlists[1].thumbnail}
              saved={false}
              id={playlists[1].id}
            />
          </StyledFilterSection>
        </>
      )}
    </StyledPodSingle>
  );
};

export default PodSingle;
