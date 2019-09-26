import React from 'react';
import styled from 'styled-components';

const StyledSearchOrClose = styled.div`
  position: absolute;
  justify-self: flex-end;
  margin: auto;
`;

const SearchOrClose = ({ magnifying }) => {
  return (
    <StyledSearchOrClose>
      {magnifying && <img src="/assets/icons/search.svg" alt="X" />}
      {!magnifying && <img src="/assets/icons/close.svg" alt="X" />}
    </StyledSearchOrClose>
  );
};

export default SearchOrClose;
