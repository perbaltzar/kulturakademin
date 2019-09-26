import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';

import FilterBar from '../modals/search/FilterBar';
import Save from '../miniature/Save';
import playlists from '../../data/playlists.json';
import selectMediaById from '../../lib/search/selectMediaById';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';
import findMediaByCategory from '../../lib/search/findMediaByCategory';
import Line from '../players/Line';
import PageBanner from '../views/Home/PageBanner';
import tracks from '../../data/tracks.json';
import videos from '../../data/youtube.json';
import youtube from '../../data/youtube.json';

let data = [videos, tracks, playlists].flat();

const StyledVideoSingle = styled.div`
  color: ${props => props.theme.colorLight};
  background-color: ${props => props.theme.colorDark};
`;
const StyledContainer = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding: 20px 20px 60px 20px;
`;

const StyledFlexBox = styled.div`
  display: flex;
  margin: 0px 0 20px 0;
  justify-content: ${props => props.justifyContent};
`;

const StyledVideoHero = styled.div`
  display: flex;
  margin: 0px 0 20px 0;
  justify-content: space-between;
  margin-top: 210px;
`;

const StyledImg = styled.img`
  justify-self: flex-start;
  align-self: flex-start;
  margin-top: 5px;
  transform: ${props => (props.toggleText ? 'rotate(0deg)' : 'rotate(-90deg)')};
  transition: 0.2s;
`;
const StyledText = styled.p`
  margin: ${props => props.margin};
`;
const StyledDescription = styled.div`
  max-height: ${props => (props.toggleText ? 'auto' : '28px')};
  transition: 0.5s;
  overflow: hidden;
  margin: ${props => props.margin};
`;

const StyledFilterCointainer = styled.div`
  h3 {
    margin-top: 50px;
  }
`;

const VideoSingle = props => {
  const { setPlayerVisible, setSmallPlayer, mediaId, setMediaId } = useContext(PlayerContext);
  const [video, setVideo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [related, setRelated] = useState(data);
  const [showFilterVideo, setShowFilterVideo] = useState(true);
  const [showFilterPod, setShowFilterPod] = useState(true);
  const [showText, setShowText] = useState(false);
  const [chosenFilter, setChosenFilter] = useState('a-ö');

  useEffect(() => {
    if (mediaId !== props.match.params.id) {
      setSmallPlayer(false);
    }
    setPlayerVisible('video');
    setMediaId(props.match.params.id);
    setVideo(selectMediaById(props.match.params.id, videos));
    setLoaded(true);
  }, [mediaId, props.match.params.id, setPlayerVisible, setMediaId, setSmallPlayer]);

  useEffect(() => {
    if (loaded) {
      let relatedMedia = [];
      video.tags.map(tag => {
        const related = findMediaByCategory(tag, data);
        return relatedMedia.push(related);
      });
      relatedMedia = [...new Set(relatedMedia.flat())].slice(0, 10);
      setRelated(relatedMedia);
    }
  }, [loaded, video.tags]);

  return (
    <StyledVideoSingle {...props}>
      <>
        {loaded && (
          <StyledContainer>
            <PageBanner />
            <StyledVideoHero>
              <h3>{video.title}</h3>
              <Save saved={false} />
            </StyledVideoHero>
            <StyledFlexBox>
              <StyledDescription toggleText={showText}>
                <p>{video.description}</p>
              </StyledDescription>
              <StyledImg
                toggleText={showText}
                src="/assets/icons/rectangle.svg"
                alt=""
                onClick={() => setShowText(!showText)}
              />
            </StyledFlexBox>

            <StyledFilterCointainer>
              <h3>Förslag</h3>
              <Line orange />
              <FilterBar
                chosen={chosenFilter}
                onClick={chosenFilter => setChosenFilter(chosenFilter)}
              />
              <p>Video</p>
              <Line />
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
                title={playlists[0].title}
                // description={media.description && `${media.description.substr(0, 70)}...`}
                thumbnail={playlists[0].thumbnail}
                saved={false}
                id={playlists[0].id}
              />
              <Pod
                title={playlists[1].title}
                // description={media.description && `${media.description.substr(0, 70)}...`}
                thumbnail={playlists[1].thumbnail}
                saved={false}
                id={playlists[1].id}
              />
            </StyledFilterCointainer>
          </StyledContainer>
        )}
      </>
    </StyledVideoSingle>
  );
};

export default VideoSingle;
