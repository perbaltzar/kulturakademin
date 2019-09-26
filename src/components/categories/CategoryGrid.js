import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import capitalize from '../../lib/capitalize';

import CategoryBox from './CategoryBox';
const StyledCategoryGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.gridTemplate};
  grid-gap: 10px;
  margin-bottom: 4vh;
`;

const categories = [
  'konst',
  'musik',
  'hantverk',
  'dans',
  'sång',
  'scenkonst',
  'smink',
  'film',
  'teater',
  'poesi',
  'event',
  'mode',
];

const CategoryGrid = props => {
  const colors = ['#66B759', '#5D6ECC', '#5AB69A', '#4EA8A8', '#5CA1BE'];
  return (
    <StyledCategoryGrid {...props}>
      {categories.map((category, i) => {
        if (i < props.numberOfCategories) {
          return (
            <Link to={`/kategori/${category}`} key={i}>
              <CategoryBox
                name={capitalize(category)}
                key={i}
                backgroundColor={colors[i % colors.length]}
              />
            </Link>
          );
        }
        return <></>;
      })}
    </StyledCategoryGrid>
  );
};

export default CategoryGrid;
