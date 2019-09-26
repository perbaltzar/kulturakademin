import React from 'react';
import styled from 'styled-components';

const StyledRecommendedForYou = styled.div`
  h5 {
    margin-bottom: 10px;
  }
  img {
    height: 280px;
    width: 100%;
  }
  div {
    padding-top: 10px;

    font: ${props => props.theme.fontMobilePsmall};
  }
`;

const RecommendedForYou = props => {
  return (
    <StyledRecommendedForYou>
      <h5>Rekommenderat för dig</h5>
      <img src="./assets/images/recommended-image.png" alt="" />
      <div>
        <p>Ut orci, sem eleifend facilisis cras sed. Risus, commodo</p>
        <p>tortor tincidunt sodales scelerisque. Non morbi vitae senectus vel egestas quis.</p>
      </div>
    </StyledRecommendedForYou>
  );
};

export default RecommendedForYou;
