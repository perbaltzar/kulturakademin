import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { PlayerContext } from '../Context';
import VideoPlayer from '../players/VideoPlayer';
import FilterButton from '../players/FilterButton';
import TagBox from '../miniature/TagBox';
import Save from '../miniature/Save';
import tracks from '../../data/tracks.json';
import videos from '../../data/youtube.json';

const StyledVideoSingle = styled.div`
  height: 100vh;
  color: ${props => props.theme.colorLight};
  background-color: ${props => props.theme.colorDark};

  .container {
    padding: 20px;
  }
`;

const StyledFlexBox = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: ${props => props.justifyContent};
`;

const VideoSingle = props => {
  const { videoHeader } = props;
  const { playerVisible, setPlayerVisible } = useContext(PlayerContext);
  const { mediaId, setmediaId } = useContext(PlayerContext);

  useEffect(() => {
    setPlayerVisible('video');
    setmediaId(props.match.params.id);
    console.log(mediaId);
  });
  return (
    <StyledVideoSingle {...props}>
      {/* <VideoPlayer /> */}
      <div className="container">
        <StyledFlexBox justifyContent="space-between">
          <h3>{videoHeader} Video Header</h3>
          <Save saved={false} />
        </StyledFlexBox>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, ipsam. Lorem ipsum
          dolor sit amet.
        </p>
        <div>
          <TagBox tagName="Musik" />
        </div>
        <p>filtrera</p>
        <StyledFlexBox justify-content="center">
          <FilterButton filterName="Podd" />
          <FilterButton filterName="Video" />
        </StyledFlexBox>
      </div>
    </StyledVideoSingle>
  );
};

export default VideoSingle;
