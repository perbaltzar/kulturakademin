import React from "react";
import styled from "styled-components";
import CategoryBox from "./CategoryBox";
const StyledCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.gridTemplate};
  grid-gap: 10px;
  margin-bottom: 57px;
`;

const categories = [
  "Konst",
  "Musik",
  "Hantverk",
  "Dans",
  "Sång",
  "Scenkonst",
  "Smink",
  "Film",
  "Teater",
  "Poesi",
  "Event",
  "Mode"
];

const CategoryGrid = props => {
  const colors = ["#66B759", "#5F8EC6", "#5AB69A", "#4EA8A8", "#5CA1BE"];
  return (
    <StyledCategoryGrid {...props}>
      {categories.map((category, i) => {
        return (
          <CategoryBox
            name={category}
            key={i}
            backgroundColor={colors[i % colors.length]}
          />
        );
      })}
    </StyledCategoryGrid>
  );
};

export default CategoryGrid;
