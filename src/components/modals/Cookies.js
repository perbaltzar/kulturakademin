import React from 'react';

import styled from 'styled-components';
import Icon from '../navbar/Icon';

const StyledCookies = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  align-items: center;
  position: fixed;
  padding: 0 20px;
  z-index: 10;
  bottom: 60px;
  width: 100vw;
  height: 120px;
  background-color: ${props => props.theme.colorDarkGrey};
  color: ${props => props.theme.colorLight};
  p {
    font: ${props => props.theme.fontMobilePsmall};
    color: ${props => props.theme.orange};
  }
  button {
    border: none;
    width: 85px;
    border-radius: 4px;
    height: 32px;
    color: ${props => props.theme.colorLight};
    background-color: ${props => props.theme.orange};
  }
  img {
  }
`;

const Cookies = ({ onClick }) => {
  const acceptCookie = () => {
    localStorage.setItem('seenCookies', true);
  };

  return (
    <StyledCookies>
      <Icon imgsrc="/assets/icons/Cookie.svg" />
      <div>
        <h4>K-play är en hemsida</h4>
        <h4>som använder cookies</h4>
        <p>Cookies-policy</p>
      </div>
      <button
        onClick={() => {
          acceptCookie();
          onClick();
        }}
      >
        Jag förstår
      </button>
    </StyledCookies>
  );
};

export default Cookies;
