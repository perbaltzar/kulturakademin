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
  const [ searchIcon, setSearchIcon] = useState("Faded")
  const { displaySearch, setDisplaySearch } = useContext(SearchContext);
  const toggleSearchIcon = () => {
    searchIcon === "Faded" ? setSearchIcon("Filled") : setSearchIcon("Faded") 
  }
  setNavPath(window.location.pathname);
  

return (
  <StyledNav>
      <Icon
      imgsrc="/assets/icons/Menu-Faded.svg"
      onClick={() => {
      setDisplayMenu('block');
      setToggleMenuAnimation(!toggleMenuAnimation);
        }}
      />

      <Link to="/">
      <Icon imgsrc={navPath === "/" ? "/assets/icons/Home-Filled.svg" : "/assets/icons/Home-Faded.svg"}/>
      </Link>
      <Link to="/favoriter">
        <Icon imgsrc={navPath === "/favoriter" ? "/assets/icons/Favourites-Filled.svg" : "/assets/icons/Favourites-Faded.svg"} />
      </Link>
        <Icon imgsrc={`assets/icons/Search-${searchIcon}.svg`} onClick={() => {
          toggleSearchIcon();
          setDisplaySearch(!displaySearch);
            }
        }/>
    </StyledNav>
  );
};

export default Nav;
