import React from 'react';
import styled from 'styled-components';

import SearchIcon from '../../SearchIcon';

const StyledNoResults = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 80px;
  h3{
      text-align: center;
      margin-top: 25px;
      padding: 0 35px;
  }
`;

const NoResults = ({ query }) => {
  return (
    <StyledNoResults>
      <SearchIcon color="orange" width={51} />
      <h3>Inga träffar på "{query}" hittades</h3>
    </StyledNoResults>
  );
};

export default NoResults;
