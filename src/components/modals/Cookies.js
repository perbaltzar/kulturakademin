import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon";

const StyledCookies = styled.div`
  display: ${props => props.isToggled};
  position: absolute;
  z-index: 10;
  top: 40vh;
  width: 375px;
  height: 100px;
  background-color: ${props => props.theme.colorDarkGrey};
  color: ${props => props.theme.colorLight};
  p {
    font: ${props => props.theme.fontMobilePsmall};
    color: ${props => props.theme.orange};
  }
  button {
    border: none;
    width: 85px;
    height: 32px;
    color: ${props => props.theme.colorLight};
    background-color: ${props => props.theme.orange};
  }
`;

const Cookies = props => {
  const [isToggled, setIsToggled] = useState("block");
  return (
    <StyledCookies isToggled={isToggled}>
      <div>
        <Icon imgsrc="/assets/icons/cookie-bite-solid.svg" />
        <h4>K-play är en hemsida</h4>
        <h4>som använder cookies</h4>
      </div>
      <p>Cookies-policy</p>
      <button onClick={() => setIsToggled("none")}>Jag förstår</button>
    </StyledCookies>
  );
};

export default Cookies;
