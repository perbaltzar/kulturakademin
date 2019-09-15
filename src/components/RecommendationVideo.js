import React from 'react';
import styled from 'styled-components';

const StyledRecommendationPod = styled.div`
    margin-top: 34px;
    padding: 0 20px;
    h2{
        color: ${props => props.theme.orange};
        margin-bottom: 18px;
    }
    div{
        background-color: grey;
        height: 230px;
        width: 100%;
    }
`;

const RecommendationPod = props => {
    return (
        <StyledRecommendationPod>
            <h2>Rekommenderat Klipp</h2>
            <div>
            </div>
            <p>En beskrivning igen på ett större klipp</p>
        </StyledRecommendationPod>
    );
};

export default RecommendationPod;