import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*,*::before,*::after{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    position: relative;
}
h1 { font: ${({ theme }) => theme.fontMobileH1}; }
h2 { font: ${({ theme }) => theme.fontMobileH2}; }
h3 { font: ${({ theme }) => theme.fontMobileH3}; }
h4 { font: ${({ theme }) => theme.fontMobileH4}; }
p { font: ${({ theme }) => theme.fontMobileP}; }
`;

export default GlobalStyles;