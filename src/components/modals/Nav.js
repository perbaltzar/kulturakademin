import React, { useContext } from "react";
import styled from "styled-components";
import { MenuContext } from "../MenuContext";
import BurgerMenu from "../BurgerMenu";
import Icon from "../Icon";

const StyledNav = styled.div`
  display: grid;
  background-color: whitesmoke;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  position: fixed;
  bottom: 0;
  padding: 0px 10px;
  height: 60px;
  width: 100%;
`;

const Nav = props => {
  const { setDisplayMenu } = useContext(MenuContext);
  return (
    <StyledNav>
      <BurgerMenu onClick={() => setDisplayMenu("block")} />
      <Icon imgsrc="/assets/icons/search-solid.svg" />
      <Icon imgsrc="/assets/icons/home-solid.svg" />
      <Icon imgsrc="/assets/icons/star-regular.svg" />
    </StyledNav>
  );
};

export default Nav;
