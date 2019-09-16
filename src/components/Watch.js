import React from 'react';
import styled from 'styled-components';

const StyledWatch = styled.div`
    display: flex;
    align-items: center;
    img {
        margin: 5px;
    }
`;

const Watch = props => {
    return (
        <StyledWatch>
            <img src="/assets/icons/eye.svg" alt="watch"/> <p>Titta</p>
        </StyledWatch>
    );
};

export default Watch;