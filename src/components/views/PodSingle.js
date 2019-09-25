import React, { useContext, useEffect, useState } from 'react';
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
  padding-bottom: 80px;
  overflow: scroll;
  background: ${props => props.theme.colorDark};
  color: white;
`;

const StyledFilterSection = styled.div`
  padding: 30px 20px;
`;

const PodSingle = ({ match }) => {
  const { mediaId, playerVisible, setPlayerVisible } = useContext(PlayerContext);
  const [playlist, setPlaylist] = useState({});
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playingTrack, setPlayingTrack] = useState({ title: '' });
  const [isPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [chosenFilter, setChosenFilter] = useState('a-ö');

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
          <PageBanner />
          <PodHero
            onClick={() => setPlayerVisible('pod')}
            trackTitle={playingTrack.title}
            trackPlaying={isPlaying}
            playlistThumbnail={playlist.thumbnail}
            playlistTitle={playlist.title}
          />
          {playlistTracks.length > 0 && <Playlist playlistTracks={playlistTracks} />}
          <StyledFilterSection>
            <FilterBar
              chosen={chosenFilter}
              onClick={chosenFilter => setChosenFilter(chosenFilter)}
            />
            <h3>Förslag</h3>
            <Line orange marginBotton />
            <p>Video</p>
            <Line marginBotton />
            <Video
              title={youtube[0].title}
              // description={media.description && `${media.description.substr(0, 70)}...`}
              thumbnail={youtube[0].thumbnail}
              saved={false}
              id={youtube[0].id}
            />
            <p>Podd</p>
            <Line />
            <Pod
              title={tracks[0].title}
              // description={media.description && `${media.description.substr(0, 70)}...`}
              thumbnail={tracks[0].thumbnail}
              saved={false}
              id={tracks[0].id}
            />
            <Pod
              title={tracks[1].title}
              // description={media.description && `${media.description.substr(0, 70)}...`}
              thumbnail={tracks[1].thumbnail}
              saved={false}
              id={tracks[1].id}
            />
          </StyledFilterSection>
        </>
      )}
    </StyledPodSingle>
  );
};

export default PodSingle;
