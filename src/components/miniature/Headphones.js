import React from 'react';
import styled from 'styled-components';

const StyledHeadphones = styled.div`
  box-shadow: 0px 0px 5px #ccc;
  background-color: #00000099;
  position: absolute;
  z-index: 2;
  margin: 5% 0 0 63%;
  padding: 5px;
  border-radius: 50%;
  width: 21px;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 9px;
    width: auto;
  }
`;

const Headphones = props => {
  return (
    <StyledHeadphones>
      <img src="/assets/icons/headphones.svg" alt="headphones" />
    </StyledHeadphones>
  );
};

export default Headphones;
