import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../Context';
import styled, { keyframes, css } from 'styled-components';
import CrossIcon from './CrossIcon';
import CategoryGrid from '../categories/CategoryGrid';

// KeyFrames for menu
const fadeIn = keyframes`
  from {
    transform: translateX(100vw)
  }

  to {
    transform: translateY(0vw)
  }
`;
const fadeOut = keyframes`
  from {
    transform: translateX(0vw)
  }

  to {
    transform: translateX(100vw)
  }
`;
const StyledMenu = styled.div`
  z-index: 1000;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;

  animation: ${props =>
    props.animation
      ? css`
          ${fadeOut} 0.3s ease-in-out forwards
        `
      : css`
          ${fadeIn} 0.3s ease-in-out forwards
        `};
  display: ${props => props.display};
  overflow: auto;
  padding: 8vh 70px;
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.colorLight};

  .menu-items {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
    margin-bottom: 6vh;
  }
  .category-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 4vh;
  }
`;
const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  img {
    margin-left: 20px;
  }
  span {
    background-color: ${props => props.theme.colorLight};
    margin: 5px 0px 10px 0px;
    height: 2px;
    width: 70px;
  }
`;
const Menu = props => {
  const { displayMenu, setDisplayMenu, toggleMenuAnimation, setToggleMenuAnimation } = useContext(
    MenuContext,
  );

  const fadeOutAnim = () => {
    setToggleMenuAnimation(!toggleMenuAnimation);
    setTimeout(() => {
      setDisplayMenu('none');
    }, 300);
  };

  return (
    <StyledMenu {...props} display={displayMenu.toString()} animation={toggleMenuAnimation}>
      <CrossIcon
        onClick={() => {
          fadeOutAnim();
        }}
      />
      <div
        onClick={() => {
          fadeOutAnim();
        }}
      >
        <div className="menu-items">
          <Link to="/">
            <h2>Hem</h2>
          </Link>
          <Link to="/om">
            <h2>Om Kulturplay</h2>
          </Link>
          <a
            href="http://www.kulturakademin.com/kurskatalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledFlex>
              <h2>Kurskatalog</h2>
              <img src="/assets/icons/Link-to.svg" alt=""></img>
            </StyledFlex>
          </a>
        </div>
        <StyledFlex column>
          <h5>Kategorier</h5>
          <span></span>
        </StyledFlex>
      </div>
      <CategoryGrid gridTemplate="1fr 1fr" onClick={() => fadeOutAnim()}></CategoryGrid>
      <a href="https://www.kulturakademin.com/" target="_blank" rel="noopener noreferrer">
        <StyledFlex>
          <h5>kulturakademin.se</h5>
          <img src="/assets/icons/Link-to.svg" alt=""></img>
        </StyledFlex>
      </a>
    </StyledMenu>
  );
};

export default Menu;
