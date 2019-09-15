import React, { useEffect, useState } from "react";
import styled from "styled-components";

import capitalize from '../lib/capitalize';

import CategoryBanner from './CategoryBanner';
import Video from './Video';

const StyledCategorySinglePage = styled.div`
  background-color: ${props => props.theme.colorDark};
  min-height: 100%;
`;

const CategorySingle = ({match}) => {
  const [category, setCategory] = useState('');


  useEffect(() => {
      setCategory(match.params.id);
 
  }, [match])
  
  return (
    <StyledCategorySinglePage>
    
    <CategoryBanner text={capitalize(category)} />
    <Video 
      title={'Video Title'} 
      description={'This is the description of the clip'}
    />
    <Video 
      title={'Video Title'} 
      description={'This is the description of the clip'}
    />

    </StyledCategorySinglePage>
  );
};

export default CategorySingle;
