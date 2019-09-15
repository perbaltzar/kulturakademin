import React from 'react';
import styled from 'styled-components';

const StyledHomeBanner = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 122px;
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.colorLight};
  font-family: ${props => props.theme.font};
  span {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
const HomeBanner = props => {
  return (
    <StyledHomeBanner>
      <span>
        K<br />
        PLAY
      </span>
      <div>
        <p>Play-sidan för dig</p>
        <p>som söker mer kultur</p>
      </div>
    </StyledHomeBanner>
  );
};

export default HomeBanner;
