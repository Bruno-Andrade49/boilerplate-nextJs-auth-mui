import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* Define 1rem como 10px (facilitando cálculos com rems) */
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.6rem; /* 16px (padrão para texto) */
    line-height: 1.6; /* Espaçamento entre linhas padrão */
    color: #333; /* Cor padrão para o texto */
    background-color: #f0f8f0; /* Cor de fundo para o corpo */
  }

  /* Estilos adicionais para tags específicas ou elementos do documento */

  /* Estilo para o container principal, garantindo altura total */
  #root {
    height: 100%;
  }
`;

export default GlobalStyles;
