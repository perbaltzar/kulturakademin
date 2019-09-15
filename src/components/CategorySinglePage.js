import React, { useEffect, useState } from "react";
import styled from "styled-components";

import capitalize from '../lib/capitalize';
import CategoryBanner from './CategoryBanner';

const StyledCategorySinglePage = styled.div`
  background-color: ${props => props.theme.colorDark};
`;

const CategorySingle = ({match}) => {
  const [category, setCategory] = useState('');
    useEffect(() => {
        setCategory(match.params.id);
    }, [match])
  return (
    <StyledCategorySinglePage>
      <CategoryBanner text={capitalize(category)} />
    </StyledCategorySinglePage>
  );
};

export default CategorySingle;
