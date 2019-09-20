import React, { useEffect, useContext, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { PlayerContext } from '../Context';
import FilterButton from '../players/FilterButton';
import TagBox from '../miniature/TagBox';
import Save from '../miniature/Save';
import tracks from '../../data/tracks.json';
import videos from '../../data/youtube.json';
import playlists from '../../data/playlists.json';
import selectMediaById from '../../lib/search/selectMediaById';
import TagGrid from '../miniature/TagGrid';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';
import findMediaByCategory from '../../lib/search/findMediaByCategory';
import Line from '../players/Line';

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

const VideoSingle = props => {
  const { setPlayerVisible, setSmallPlayer, mediaId, setMediaId } = useContext(PlayerContext);
  const [video, setVideo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [related, setRelated] = useState(data);
  const [showFilterVideo, setShowFilterVideo] = useState(true);
  const [showFilterPod, setShowFilterPod] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (mediaId !== props.match.params.id) {
      setSmallPlayer(false);
    }
    setPlayerVisible('video');
    setMediaId(props.match.params.id);
    setVideo(selectMediaById(props.match.params.id, videos));
    setLoaded(true);
  });

  useEffect(() => {
    if (loaded) {
      let relatedMedia = [];
      video.tags.map(tag => {
        const asd = findMediaByCategory(tag, data);
        relatedMedia.push(asd);
      });
      relatedMedia = [...new Set(relatedMedia.flat())];
      let filteredRelatedMedia = relatedMedia.slice(0, 10);
      setRelated(filteredRelatedMedia);
    }
  }, [loaded]);

  return (
    <StyledVideoSingle {...props}>
      <>
        {loaded && (
          <StyledContainer>
            <StyledFlexBox justifyContent="space-between">
              <h3>{video.title}</h3>
              <Save saved={false} />
            </StyledFlexBox>
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
            <TagGrid tags={video.tags} />
            <Line />
            <StyledText margin="20px 0 0 0">filtrera</StyledText>
            <StyledFlexBox justifyContent="flex-start">
              <FilterButton
                filterName="Podd"
                isActive={showFilterPod}
                onClick={() => setShowFilterPod(!showFilterPod)}
              />
              <FilterButton
                filterName="Video"
                isActive={showFilterVideo}
                onClick={() => setShowFilterVideo(!showFilterVideo)}
              />
            </StyledFlexBox>
            {related.map((media, i) => {
              if (media.type === 'video' && showFilterVideo === true) {
                return (
                  <Video
                    key={i}
                    title={media.title}
                    // description={media.description && `${media.description.substr(0, 70)}...`}
                    thumbnail={media.thumbnail}
                    saved={false}
                    id={media.id}
                  />
                );
              } else if (media.type === 'podcast' && showFilterPod) {
                return (
                  <Pod
                    key={i}
                    title={media.title.substr(5, 1000)}
                    // description={media.description && `${media.description.substr(0, 70)}...`}
                    thumbnail={media.thumbnail}
                    saved={false}
                    id={media.id}
                  />
                );
              }
              return <></>;
            })}
          </StyledContainer>
        )}
      </>
    </StyledVideoSingle>
  );
};

export default VideoSingle;
