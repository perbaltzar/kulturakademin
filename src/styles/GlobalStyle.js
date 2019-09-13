import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

*,*::before,*::after{
    padding: 0;
    margin:0;
    box-sizing: border-box;
    position: relative;
}
`;

export default GlobalStyle;