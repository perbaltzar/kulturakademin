import React from 'react';
import styled from 'styled-components';
import youtube from '../../../data/youtube.json';
const StyledVideoThumbnail = styled.div`
  margin-right: 10px;
  color: black;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 5px;
    font-size: 12px;
    color: ${props => props.theme.colorLight};
  }
  img,
  p {
    margin-bottom: 10px;
  }
`;
youtube.pop();
const VideoThumbnail = props => {
  return (
    <>
      {youtube.map((video, i) => {
        let newDescription =
          video.description.length > 30
            ? `${video.description.substring(0, 30)}...`
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
