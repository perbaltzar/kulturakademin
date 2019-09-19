import React from 'react';
import styled from 'styled-components';
import TagBox from './TagBox';

const StyledTagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  margin: 10px 0;
  padding: 0 20px; /* FUNKAR DET ATT HA DENNA HÄR ADRIAN ELLER FACKAR DET UR DÅ? */
`;

const TagGrid = ({ tags }) => {
  return (
    <StyledTagGrid>
      {tags.length > 0 &&
        tags.map((tag, i) => {
          return <TagBox key={i} text={tag} />;
        })}
    </StyledTagGrid>
  );
};

export default TagGrid;
