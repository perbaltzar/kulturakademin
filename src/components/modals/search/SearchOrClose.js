import React from 'react';
import styled from 'styled-components';

const StyledSearchOrClose = styled.div`
  position: absolute;
  justify-self: flex-end;
  margin: auto;
  padding-top: 3px;
  img{
    height: 20px
    width: auto;
  }
`;

const SearchOrClose = ({ magnifying, onClick }) => {
  return (
    <StyledSearchOrClose>
      {magnifying && <img src="/assets/icons/search.svg" alt="X" />}
      {!magnifying && <img src="/assets/icons/close.svg" alt="X" onClick={onClick} />}
    </StyledSearchOrClose>
  );
};

export default SearchOrClose;
