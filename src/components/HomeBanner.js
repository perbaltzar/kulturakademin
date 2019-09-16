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
    margin-top: 40px;
  }
  div {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  div h3{
    margin-bottom: 5px;
  }
`;
const HomeBanner = props => {
  return (
    <StyledHomeBanner>
      <span>
        <img src="/assets/icons/k-play.svg" alt="k-play" />
      </span>
      <div>
        <h3>Play-sidan för dig</h3>
        <h3>som söker mer kultur</h3>
      </div>
    </StyledHomeBanner>
  );
};

export default HomeBanner;
