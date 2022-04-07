import { createGlobalStyle } from "styled-components";
import NotoSerif from "../../assets/fonts/NotoSerifDisplay-VariableFont_wdth,wght.ttf";
import NotoSerifItal from "../../assets/fonts/NotoSerifDisplay-Italic-VariableFont_wdth,wght.ttf";
import EBGaramond from "../../assets/fonts/EBGaramond-VariableFont_wght.ttf";
import EBGaramondItalic from "../../assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

@font-face {
  font-family: 'Noto Serif';
  src: url(${NotoSerif}) format('truetype');
  font-weight: 100 800;
}
@font-face {
  font-family: 'Noto Serif Italic';
  src: url(${NotoSerifItal}) format('truetype');
  font-weight: 100 800 ;
}
@font-face {
  font-family: 'EB Garamond';
  src: url(${EBGaramond}) format('truetype');
  font-weight: 100 800;
}
@font-face {
  font-family: 'EB Garamond Italic';
  src: url(${EBGaramondItalic}) format('truetype');
  font-weight: 100 800 ;
}

`;
