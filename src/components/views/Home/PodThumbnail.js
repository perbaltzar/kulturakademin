import React from 'react';
import styled from 'styled-components';
import HeadphonesLarge from '../../miniature/HeadphonesLarge';
import Progressbar from '../../players/ProgressBar';
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
    font: ${props => props.theme.fontMobilePsmall};
    line-height: 15px;
  }
  img {
    height: auto;
    width: 100%;
    margin-bottom: 5px;
  }
`;

const PodThumbnail = props => {
  let newTitle = props.title.length > 50 ? `${props.title.substring(0, 50)}...` : props.title;
  return (
    <StyledPodThumbnail>
      <HeadphonesLarge />
      <img src={props.thumbnail} alt="video" />
      <p>{newTitle}</p>
      {props.numberOfVisits > 1 && <Progressbar progress={75} />}
    </StyledPodThumbnail>
  );
};

export default PodThumbnail;
