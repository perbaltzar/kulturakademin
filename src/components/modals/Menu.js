import React, { useContext } from "react";
import { MenuContext } from "../MenuContext";
import styled from "styled-components";
import CrossIcon from "../CrossIcon";

const StyledMenu = styled.div`
  display: ${props => props.display};
  z-index: 1;
  height: 100vh;
  width: 100%;
  overflow: auto;
  background-color: ${props => props.theme.colorDark};
`;

const Menu = props => {
  const { displayMenu, setDisplayMenu } = useContext(MenuContext);
  return (
    <StyledMenu display={displayMenu.toString()}>
      <CrossIcon onClick={() => setDisplayMenu("none")} />
    </StyledMenu>
  );
};

export default Menu;
