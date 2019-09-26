import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import AboutPageBanner from './AboutPageBanner';
import Line from '../players/Line';

const StyledAbout = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding: 0 20px 80px 20px;
  height: 100vh;
  overflow: scroll;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    margin: 20px 0;
    line-height: 22px;
    font-weight: normal;
  }
  h2 {
    padding-top: 10px;
  }
  a span {
    display: flex;
    margin-top: 25px;
    img {
      margin-left: 10px;
    }
  }
`;

const About = props => {
  return (
    <>
      <AboutPageBanner />
      <StyledAbout>
        <div>
          <h2>Om Kulturplay</h2>
          <Line orange />
          <h5>
            På Kulturplay kommer du hitta bakom kulisserna-material med skådespelare, intervjuer med
            regissörer, föreläsningar med roliga gäster och intressanta debatter och tutorials. Här
            kan du fördjupa dig inom dina kulturella intressen men också hitta nya områden som
            intresserar dig.
          </h5>
        </div>

        <div>
          <a href="https://www.kulturakademin.com/" target="_blank" rel="noopener noreferrer">
            <span>
              <h3>Kulturakademin.com</h3>
              <img src="/assets/icons/Link-to.svg" alt="" />
            </span>
          </a>

          <a
            href="https://www.kulturakademin.com/kontakt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <h3>Kontakta Oss</h3>
              <img src="/assets/icons/Link-to.svg" alt="" />
            </span>
          </a>
        </div>
      </StyledAbout>
    </>
  );
};

export default About;
