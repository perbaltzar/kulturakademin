import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding-bottom: 80px;
  height: 100vh;
`;

const About = props => {
  return <StyledAbout></StyledAbout>;
};

export default About;
