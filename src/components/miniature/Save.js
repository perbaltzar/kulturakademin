import React from 'react';
import styled from 'styled-components';

const StyledSave = styled.div`
  margin-left: ${props => (props.marginleft ? '20%' : '0')};
  display: flex;
  align-items: center;
  img {
    margin: 5px;
  }
`;

const Save = props => {
  return (
    <StyledSave {...props}>
      {props.saved && <img src="/assets/icons/star-filled.svg" alt="listen" />}
      {!props.saved && <img src="/assets/icons/star.svg" alt="listen" />}

      <p>Spara</p>
    </StyledSave>
  );
};

export default Save;
