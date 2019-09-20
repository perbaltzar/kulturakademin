import React from 'react';
import styled from 'styled-components';

const StyledListen = styled.div`
  display: flex;
  align-items: center;
  img {
    margin: 5px;
  }
`;

const Listen = ({ onClick }) => {
  return (
    <StyledListen onClick={onClick}>
      <img src="/assets/icons/ear.svg" alt="listen" /> <p>Lyssna</p>
    </StyledListen>
  );
};

export default Listen;
