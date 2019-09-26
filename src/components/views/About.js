import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import PageBanner from './Home/PageBanner';
import Line from '../players/Line';

const StyledAbout = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding: 0 20px 80px 20px;
  height: 100vh;
  overflow: scroll;
  color: white;
  p {
    line-height: 24px;
    margin-bottom: 20px;
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
    <StyledAbout>
      <PageBanner />
      <h2>Om Kulturplay</h2>
      <Line orange />
      <p>
        På Kulturplay kommer du hitta bakom kulisserna-material med skådespelare, intervjuer med
        regissörer, föreläsningar med roliga gäster och intressanta debatter och tutorials. Här kan
        du fördjupa dig inom dina kulturella intressen men också hitta nya områden som intresserar
        dig.
      </p>
      <h2>Kulturplay som app</h2>
      <Line orange />
      <p>
        Kulturplay finns som en PWA-app. PWA app är en webbsida som beter sig som en app. Den
        startas från en ikon på hemskärmen som en vanlig app. Det innebär att du enkelt når appen,
        du behöver inte söka på AppStore. Bara klicka på en länk och PWA-appen laddas ner i din
        mobil eller platta.
      </p>
      <p>Gör såhär för att ladda ner kulturplay som en PWA-app till din mobil.</p>
      <p>1. Klicka på “mer” i din webbläsares meny</p>
      <p> 2. Välj lägg till på startskärmen</p>
      <Line margins />
      <a href="https://www.kulturakademin.com/" target="_blank" rel="noopener noreferrer">
        <span>
          <h3>Kulturakademin.com</h3>
          <img src="/assets/icons/Link-to.svg" alt="" />
        </span>
      </a>

      <a href="https://www.kulturakademin.com/kontakt" target="_blank" rel="noopener noreferrer">
        <span>
          <h3>Kontakta Oss</h3>
          <img src="/assets/icons/Link-to.svg" alt="" />
        </span>
      </a>
      <Link to="/tack">
        <span>
          <h3>Tack</h3>
        </span>
      </Link>
    </StyledAbout>
  );
};

export default About;
