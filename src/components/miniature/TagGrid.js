import React from 'react';
import styled from 'styled-components';
import TagBox from './TagBox';

const StyledTagGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  margin: 10px 0;
`;

const TagGrid = ({ tags }) => {
  return (
    <StyledTagGrid>
      {tags.length > 0 &&
        tags.map(tag => {
          return <TagBox text={tag} />;
        })}
    </StyledTagGrid>
  );
};

export default TagGrid;
