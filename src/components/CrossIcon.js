import React from "react";
import styled from "styled-components";

const StyledCrossIcon = styled.div`
  position: absolute;
  z-index: 2;
  right: 24px;
  top: 24px;
  width: 24px;
  height: 24px;
  :before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 24px;
    width: 2px;
    background-color: white;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

const CrossIcon = props => {
  return <StyledCrossIcon onClick={props.onClick}></StyledCrossIcon>;
};

export default CrossIcon;
