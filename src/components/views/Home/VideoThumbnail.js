import React from 'react';
import styled from 'styled-components';
import youtube from '../../../data/youtube.json';
const StyledVideoThumbnail = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 5px;
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colorLight};
    margin-bottom: 10px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
youtube.pop();
const VideoThumbnail = props => {
  return (
    <>
      {youtube.map((video, i) => {
        let newDescription =
          video.description.length > 50
            ? `${video.description.substring(0, 50)}...`
            : video.description;

        return (
          <StyledVideoThumbnail key={i}>
            <img src={video.thumbnail} width="160" height="100" alt="video" />
            <p>{newDescription}</p>
          </StyledVideoThumbnail>
        );
      })}
    </>
  );
};

export default VideoThumbnail;
