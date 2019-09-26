import React from 'react';
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  height: 4px;
  width: ${props => props.progress}%;
  margin-top: 5px;
  background-color: ${props => props.theme.orange};
`;

const ProgressBar = ({ progress }) => {
  return <StyledProgressBar progress={progress}></StyledProgressBar>;
};

export default ProgressBar;
