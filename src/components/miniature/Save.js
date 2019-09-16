import React from 'react';
import styled from 'styled-components';

const StyledSave = styled.div`
  margin-left: 20%;
  display: flex;
  align-items: center;
  img {
    margin: 5px;
  }
`;

const Save = ({ saved }) => {
  return (
    <StyledSave>
      {saved && <img src="/assets/icons/star-filled.svg" alt="listen" />}
      {!saved && <img src="/assets/icons/star.svg" alt="listen" />}

      <p>Spara</p>
    </StyledSave>
  );
};

export default Save;
