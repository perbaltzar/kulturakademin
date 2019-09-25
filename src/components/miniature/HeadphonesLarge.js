import React from 'react';
import styled from 'styled-components';
const StyledHeadphones = styled.div`
  width: 31px;
  height: 31px;
  position: absolute;
  top: 5px;
  right: 7px;
  z-index: 5;
`;
const Headphones = props => {
  return (
    <StyledHeadphones>
      <img src="/assets/icons/headphonesLarge.svg" alt="headphones" />
    </StyledHeadphones>
  );
};
export default Headphones;
