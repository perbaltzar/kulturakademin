import React from 'react';
import styled from 'styled-components';

import PageBanner from './Home/PageBanner';
import Line from '../players/Line';

const StyledAboutApp = styled.div`
  background-color: ${props => props.theme.colorDark};
  padding: 0 20px 80px 20px;
  height: 100vh;
  overflow: scroll;
  color: white;

  h5 {
    margin: 20px 0;
    line-height: 22px;
    font-weight: normal;
  }
`;

const AboutApp = props => {
  return (
    <>
      <PageBanner />
      <StyledAboutApp>
        <h2>Kulturplay som app</h2>
        <Line orange />
        <h5>
          Kulturplay finns som en PWA-app. PWA app är en webbsida som beter sig som en app. Den
          startas från en ikon på hemskärmen som en vanlig app.
        </h5>
        <h5>
          Det innebär att du enkelt når appen, du behöver inte söka på AppStore. Bara klicka på en
          länk och PWA-appen laddas ner i din mobil eller platta.
        </h5>
        <h5>Gör såhär för att ladda ner kulturplay som en PWA-app till din mobil.</h5>
        <h5>1. Klicka på “mer” i din webbläsares meny</h5>
        <h5> 2. Välj lägg till på startskärmen</h5>
      </StyledAboutApp>
    </>
  );
};

export default AboutApp;
