import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MenuContext, SearchContext } from '../Context';
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
  z-index: 230;
`;

const Nav = () => {
  const { setDisplayMenu, toggleMenuAnimation, setToggleMenuAnimation } = useContext(MenuContext);

  const { navPath, setNavPath } = useContext(MenuContext);

  const {
    displaySearch,
    setDisplaySearch,
    toggleSearchAnimation,
    setToggleSearchAnimation,
  } = useContext(SearchContext);

  const toggleSearch = () => {
    if (displaySearch) {
      setTimeout(() => {
        setDisplaySearch(!displaySearch);
      }, 400);
    } else {
      setDisplaySearch(!displaySearch);
    }
    setToggleSearchAnimation(!toggleSearchAnimation);
  };

  setNavPath(window.location.pathname);

  return (
    <StyledNav>
      <Icon
        imgsrc="/assets/icons/navbar/hamburger-faded.svg"
        onClick={() => {
          setDisplayMenu('block');
          setToggleMenuAnimation(!toggleMenuAnimation);
        }}
      />

      <Link to="/">
        <Icon
          imgsrc={
            navPath === '/' && !displaySearch
              ? '/assets/icons/navbar/home-filled.svg'
              : '/assets/icons/navbar/home-faded.svg'
          }
          onClick={() => {
            if (displaySearch) toggleSearch();
          }}
        />
      </Link>
      <Link to="/favoriter">
        <Icon
          imgsrc={
            navPath === '/favoriter' && !displaySearch
              ? '/assets/icons/navbar/favourites-filled.svg'
              : '/assets/icons/navbar/favourites-faded.svg'
          }
          onClick={() => {
            if (displaySearch) toggleSearch();
          }}
        />
      </Link>
      <Icon
        imgsrc={
          displaySearch
            ? `/assets/icons/navbar/search-filled.svg`
            : `/assets/icons/navbar/search-faded.svg`
        }
        onClick={() => {
          toggleSearch();
        }}
      />
    </StyledNav>
  );
};

export default Nav;
