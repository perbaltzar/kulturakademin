import React from "react";
import styled from "styled-components";

const StyledCategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 57px;
  background-color: ${props => props.backgroundColor};
`;

const CategoryBox = props => {
  const { name, backgroundColor } = props;
  return (
    <StyledCategoryBox backgroundColor={backgroundColor}>
      <p>{name}</p>
    </StyledCategoryBox>
  );
};

export default CategoryBox;
