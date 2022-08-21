import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --text-title: #525252;
    --text-body: #969cb3;
    --shape: #FFFFFF;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #root, .App {
    height: 100%;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--text-title);
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    cursor: not-allowed;
    opacity: 0.6;
  }         
`;

export default GlobalStyled;