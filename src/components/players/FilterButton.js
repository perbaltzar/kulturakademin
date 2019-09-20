import React from 'react';
import styled from 'styled-components';

const StyledfilterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 31px;
  margin: 20px 10px 0 0;
  color: ${props => props.theme.colorLight};
  border: 2px solid ${props => props.theme.colorLight};
  opacity: ${props => (props.isActive ? '1' : '0.1')};
  p {
    font: ${props => props.theme.fontMobilePsmall};
  }
`;

const FilterButton = props => {
  const { filterName } = props;
  const { isActive } = props;
  return (
    <StyledfilterButton isActive={isActive} onClick={props.onClick}>
      <p>{filterName}</p>
    </StyledfilterButton>
  );
};

export default FilterButton;
