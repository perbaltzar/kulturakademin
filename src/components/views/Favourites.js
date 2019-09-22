import React, { useContext } from 'react';
import styled from 'styled-components';
import CategoryBanner from '../categories/CategoryBanner';
import { PlayerContext } from '../Context';
const StyledFavourites = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding-bottom: 80px;
  height: 100vh;
`;

const Favourites = props => {
  const data = useContext(PlayerContext);
  console.log(data);
  return (
    <StyledFavourites>
      <CategoryBanner text="Favoriter"></CategoryBanner>
    </StyledFavourites>
  );
};

export default Favourites;
