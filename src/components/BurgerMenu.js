import React from "react";
import styled from "styled-components";

const StyledBurgerMenu = styled.div`
  height: 28px;
  width: 24px;
  span {
    display: block;
    background-color: black;
    margin: 5px 0px;
    height: 3px;
  }
`;

const BurgerMenu = props => {
  return (
    <StyledBurgerMenu>
      <span></span>
      <span></span>
      <span></span>
    </StyledBurgerMenu>
  );
};

export default BurgerMenu;
