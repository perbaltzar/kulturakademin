import React from 'react';
import styled from 'styled-components';

const StyledFilterButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px white;
  ${props => (props.chosen ? `background-color: ${props.theme.orange}; border: none;` : '')}
`;

const StyledFilterBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  div {
    border-radius: 5px;
    height: 20px;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  p {
    color: white;
  }
  span {
  }
  span:first-of-type {
    border-radius: 5px 0 0 5px;
  }
  span:last-of-type  {
    border-radius: 0 5px 5px 0;
  }
`;

const FilterBar = ({ chosen, onClick }) => {
  return (
    <StyledFilterBar>
      <div>
        <StyledFilterButton chosen={chosen === 'a-ö'} onClick={() => onClick('a-ö')}>
          <p>A-Ö</p>
        </StyledFilterButton>
        <StyledFilterButton chosen={chosen === 'senaste'} onClick={() => onClick('senaste')}>
          <p>Senaste</p>
        </StyledFilterButton>
        <StyledFilterButton chosen={chosen === 'podd'} onClick={() => onClick('podd')}>
          <p>Podd</p>
        </StyledFilterButton>
        <StyledFilterButton chosen={chosen === 'video'} onClick={() => onClick('video')}>
          <p>Video</p>
        </StyledFilterButton>
      </div>
    </StyledFilterBar>
  );
};

export default FilterBar;
