import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';
import FilterButton from '../players/FilterButton';
import TagBox from '../miniature/TagBox';
import Save from '../miniature/Save';
import tracks from '../../data/tracks.json';
import videos from '../../data/youtube.json';
import playlists from '../../data/playlists.json';
import selectTrackById from '../../lib/search/selectTrackById';
import TagGrid from '../miniature/TagGrid';
import Video from '../miniature/Video';
import Pod from '../miniature/Pod';
import findMediaByCategory from '../../lib/search/findMediaByCategory';

let data = [videos, tracks, playlists].flat();

const StyledVideoSingle = styled.div`
  height: 100vh;
  /* overflow: scroll; */
  margin-bottom: 50px;
  color: ${props => props.theme.colorLight};
  background-color: ${props => props.theme.colorDark};

  .container {
    background-color: ${props => props.theme.colorDark};
    padding: 20px 20px 100px 20px;
  }
`;

const StyledFlexBox = styled.div`
  display: flex;
  margin: 10px 0 20px 0;
  justify-content: ${props => props.justifyContent};
`;

const VideoSingle = props => {
  const { videoHeader } = props;
  const { playerVisible, setPlayerVisible, setSmallPlayer, mediaId, setMediaId } = useContext(
    PlayerContext,
  );
  const [video, setVideo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [related, setRelated] = useState(data);
  const [showFilterVideo, setShowFilterVideo] = useState(true);
  const [showFilterPod, setShowFilterPod] = useState(true);

  useEffect(() => {
    if (mediaId !== props.match.params.id) {
      setSmallPlayer(false);
    }
    setPlayerVisible('video');
    setMediaId(props.match.params.id);
    setVideo(selectTrackById(props.match.params.id, videos));
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
          <div className="container">
            <StyledFlexBox justifyContent="space-between">
              <h3>{videoHeader} Video Header</h3>
              <Save saved={false} />
            </StyledFlexBox>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsam. Lorem ipsum
              dolor sit amet.
            </p>
            <TagGrid tags={video.tags} />
            <p>filtrera</p>
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
          </div>
        )}
      </>
    </StyledVideoSingle>
  );
};

export default VideoSingle;
