import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
  * {
    font-size: 1rem;
    font-family: sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;

    background-color: #eee;
    color: rebeccapurple;
  }
`;

export default GlobalStyle;

