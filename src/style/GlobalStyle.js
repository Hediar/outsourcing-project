import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
* {
    color: #2b2b2b;
  }
  svg, path {
    color:inherit;
  }
/* 
@font-face {
    font-family: 'CookieRun-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

 

  body {
    font-family: 'CookieRun-Regular';
    margin-top: 100px;
    } */
`;

export default GlobalStyle;
