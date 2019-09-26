import React from 'react';
import styled from 'styled-components';
import HeadphonesLarge from '../../miniature/HeadphonesLarge';

const StyledPodThumbnail = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colorLight};
  :first-child {
    margin-right: 20px;
  }
  p {
    margin-top: 5px;
  }
  img {
    height: auto;
    width: 100%;
    margin-bottom: 5px;
  }
`;

const PodThumbnail = props => {
  return (
    <StyledPodThumbnail>
      <HeadphonesLarge />
      <img src={props.thumbnail} alt="video" />
      <p>{props.title}</p>
    </StyledPodThumbnail>
  );
};

export default PodThumbnail;
