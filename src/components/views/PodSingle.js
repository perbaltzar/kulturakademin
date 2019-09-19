import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';
import TagGrid from '../miniature/TagGrid';
import Line from '../players/Line';
import Playlist from '../players/Playlist';
import tracks from '../../data/tracks.json';
import selectTrackById from '../../lib/search/selectTrackById';

const StyledPodSingle = styled.div`
  height: 100vh;
  padding: 0 20px;
  overflow: scroll;
  background: ${props => props.theme.colorDark};
`;

const StyledHero = styled.div`
  padding: 80px 80px 0 80px;
  margin-bottom: 30px;
  img {
    width: 100%;
  }
  h2 {
    margin-top: 10px;
    color: white;
  }
`;

const PodSingle = ({ match }) => {
  const { setPlayerVisible, setMediaId } = useContext(PlayerContext);
  const [pod, setPod] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setMediaId(match.params.id);
    setPod(selectTrackById(match.params.id, tracks));
    setLoaded(true);
  }, [setMediaId, match.params.id]);

  useEffect(() => {
    if (loaded) console.log(pod);
  }, [loaded, pod]);

  return (
    <StyledPodSingle>
      {loaded && (
        <>
          <StyledHero>
            <img onClick={() => setPlayerVisible('pod')} src={pod.thumbnail} alt="thumbnail" />
            <h2>{pod.title.substr(5, 1000)}</h2>
          </StyledHero>
          <TagGrid tags={pod.tags} />
          <Line />
            <Playlist />
          <Line />
        </>
      )}
    </StyledPodSingle>
  );
};

export default PodSingle;
