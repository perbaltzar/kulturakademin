import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuContext } from '../Context';
import styled from 'styled-components';
import CrossIcon from './CrossIcon';
import CategoryGrid from '../categories/CategoryGrid';

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  display: ${props => props.display};
  z-index: 1000;
  height: 100vh;
  width: 100%;
  overflow: auto;
  padding: 0 70px;
  background-color: ${props => props.theme.colorDark};
  color: ${props => props.theme.colorLight};
  h2 {
    margin-bottom: 8px;
  }
  h4 {
    margin-bottom: 65px;
  }
  .menu-items {
    margin-top: 100px;
    h2 {
      margin-bottom: 25px;
    }
    h4 {
      margin-top: 50px;
    }
    span {
      display: block;
      top: -60px;
      background-color: ${props => props.theme.colorLight};
      margin: 5px 0px 25px 0px;
      height: 2px;
      width: 70px;
    }
  }
  .category-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 57px;
  }
`;

const Menu = props => {
  const { displayMenu, setDisplayMenu } = useContext(MenuContext);
  return (
    <StyledMenu display={displayMenu.toString()}>
      <CrossIcon onClick={() => setDisplayMenu('none')} />
      <div className="menu-items">
        <div onClick={() => setDisplayMenu('none')}>
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
            <h2>Kurser</h2>
          </a>
          <Link to="/installningar">
            <h2>Inställningar</h2>
          </Link>
          <h2>English</h2>
          <h4>Kategorier</h4>
        </div>
        <span></span>
        <CategoryGrid gridTemplate="1fr 1fr" onClick={() => setDisplayMenu('none')}></CategoryGrid>
      </div>
      <a href="https://www.kulturakademin.com/" target="_blank" rel="noopener noreferrer">
        <h2>Tillbaka till</h2>
        <h4>kulturakademin.com</h4>
      </a>
    </StyledMenu>
  );
};

export default Menu;
