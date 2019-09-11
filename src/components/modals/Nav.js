import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: gray;
`;

const Nav = props => {
  return <StyledNav></StyledNav>;
};

export default Nav;
