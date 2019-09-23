import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuContext } from '../Context';
import BurgerMenu from './BurgerMenu';
import Icon from './Icon';

const StyledNav = styled.div`
  height: 60px;
  width: 100%;
  display: grid;
  background-color: whitesmoke;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;
  position: fixed;
  bottom: 0;
  padding: 0px 10px;
  z-index: 100;
`;

const Nav = props => {
  const { setDisplayMenu, toggleMenuAnimation, setToggleMenuAnimation } = useContext(MenuContext);
  return (
    <StyledNav>
      <BurgerMenu
        onClick={() => {
          setDisplayMenu('block');
          setToggleMenuAnimation(!toggleMenuAnimation);
        }}
      />
      <Icon imgsrc="/assets/icons/search-solid.svg" />

      <Link to="/">
        <Icon imgsrc="/assets/icons/home-solid.svg" />
      </Link>
      <Link to="/favoriter">
        <Icon imgsrc="/assets/icons/star-regular.svg" />
      </Link>
    </StyledNav>
  );
};

export default Nav;
