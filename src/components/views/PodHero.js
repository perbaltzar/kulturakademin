import React from 'react';
import styled from 'styled-components';

const StyledPodHero = styled.div`
  padding: 10px 50px 0 50px;
  margin-bottom: 30px;
  img {
    width: 100%;
  }
  h2 {
    margin: 10px 0;
    color: white;
  }
  p {
    color: white;
  }
`;

const StyledPodHeroPlaying = styled.div`
  padding: 10px 20px 0 50px;
  display: flex;
  img {
    width: 50%;
    margin-right: 10px;
  }
  h3 {
    color: white;
  }
`;

const PodHero = ({ onClick, playlistThumbnail, playlistTitle, trackTitle, trackPlaying }) => {
  return (
    <>
      {trackPlaying && (
        <StyledPodHero>
          <img onClick={onClick} src={playlistThumbnail} alt="thumbnail" />
          <h2>{playlistTitle}</h2>
          <p>{trackTitle}</p>
        </StyledPodHero>
      )}
      {!trackPlaying && (
        <StyledPodHeroPlaying>
          <img onClick={onClick} src={playlistThumbnail} alt="thumbnail" />
          <div>
            <h3>{playlistTitle}</h3>
            <p>{trackTitle}</p>
          </div>
        </StyledPodHeroPlaying>
      )}
    </>
  );
};

export default PodHero;
