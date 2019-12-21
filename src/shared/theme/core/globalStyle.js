import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { LoadFonts } from './index';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F0F0F0; /*#F0F4F3*/
    font-size: calc(14px + (21 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  a { text-decoration: none; color: inherit; }

  ${Reset}
  ${LoadFonts}
`;