import React from 'react';
import styled from 'styled-components';

const StyledCategoryBanner = styled.div`
    height: 126px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.orange};
    h1{
        color: ${props => props.theme.colorLight};
    }
`;

const CategoryBanner = ({ text }) => {
    
    return (
        <StyledCategoryBanner>
            <h1>{text}</h1>
        </StyledCategoryBanner>
    );
};

export default CategoryBanner;