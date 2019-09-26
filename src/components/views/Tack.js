import React from 'react';
import styled from 'styled-components';

import PageBanner from './Home/PageBanner';
import Line from '../players/Line';

const StyledTack = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding: 0 20px 80px 20px;
  height: 100vh;
  overflow: scroll;
  color: white;
  h3 {
    color: ${props => props.theme.orange};
    /* color: lime; */
    font-size: 24px;
  }
  h5 {
    margin-top: 100px;
    margin-bottom: 10px;
  }
  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    color: orange;
  }
  a span {
    display: flex;
    margin-top: 25px;
    img {
      margin-left: 10px;
    }
  }
`;

const Tack = props => {
  return (
    <StyledTack>
      <PageBanner />
      <h1>Tack för oss, Frågor?</h1>
      <Line orange />
      <h2>Webbutvecklare</h2>
      <h4>Per Baltzar</h4>
      <h4>Adrian Jungnelius</h4>
      <h2>UX-Designer</h2>
      <h4>Philip Gates</h4>
      <h4>Faj Mac</h4>
      <h4>Saxer Karlsson</h4>
      <h2>Digital Designer</h2>
      <h4>Tara Salim Ali Bagar</h4>
      <h4>Arvid Lindstedt</h4>
      <h5>Titta in på sidan själva:</h5>
      <h3>http://kulturplay.netlify.com</h3>
    </StyledTack>
  );
};

export default Tack;
