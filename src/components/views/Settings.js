import React from 'react';
import styled from 'styled-components';

const StyledSettings = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding-bottom: 80px;
  height: 100vh;
`;

const Settings = props => {
  return <StyledSettings></StyledSettings>;
};

export default Settings;
