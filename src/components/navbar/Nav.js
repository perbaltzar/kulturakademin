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
  z-index: 100;
`;

const Nav = () => {
  const { setDisplayMenu, toggleMenuAnimation, setToggleMenuAnimation } = useContext(MenuContext);

  const { navPath, setNavPath } = useContext(MenuContext);
  const [searchIcon, setSearchIcon] = useState('faded');
  const {
    displaySearch,
    setDisplaySearch,
    toggleSearchAnimation,
    setToggleSearchAnimation,
  } = useContext(SearchContext);
  const toggleSearchIcon = () => {
    searchIcon === 'faded' ? setSearchIcon('filled') : setSearchIcon('faded');
  };
  const toggleSearch = () => {
    console.log(toggleSearchAnimation);
    setToggleSearchAnimation(!toggleSearchAnimation);
    setTimeout(() => {
      setDisplaySearch(!displaySearch);
    }, 300);
  };

  const checkIfDisplaySearch = () => {
    if (displaySearch === true) {
      toggleSearchIcon();
    }
  };
  setNavPath(window.location.pathname);

  return (
    <StyledNav>
      <Icon
        imgsrc="/assets/icons/navbar/hamburger-faded.svg"
        onClick={() => {
          setDisplayMenu('block');
          setToggleMenuAnimation(!toggleMenuAnimation);
          checkIfDisplaySearch();
        }}
      />

      <Link to="/">
        <Icon
          imgsrc={
            navPath === '/'
              ? '/assets/icons/navbar/home-filled.svg'
              : '/assets/icons/navbar/home-faded.svg'
          }
          onClick={() => {
            checkIfDisplaySearch();
          }}
        />
      </Link>
      <Link to="/favoriter">
        <Icon
          imgsrc={
            navPath === '/favoriter'
              ? '/assets/icons/navbar/favourites-filled.svg'
              : '/assets/icons/navbar/favourites-faded.svg'
          }
          onClick={() => {
            checkIfDisplaySearch();
          }}
        />
      </Link>
      <Icon
        imgsrc={`/assets/icons/navbar/search-${searchIcon}.svg`}
        onClick={() => {
          checkIfDisplaySearch();
          toggleSearchIcon();
          toggleSearch();
        }}
      />
    </StyledNav>
  );
};

export default Nav;
