import React from 'react';
import styled from 'styled-components';

const StyledFavourites = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding-bottom: 80px;
  height: 100vh;
`;

const Favourites = props => {
  return <StyledFavourites></StyledFavourites>;
};

export default Favourites;
