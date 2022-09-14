import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
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
    background-color: ${(props) => props.theme.backgroundBody};
    color: ${(props) => props.theme.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: ${(props) => props.theme.title};
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  .btn-settings-option-open {
    background-color: ${(props) => props.theme.backgroundButton};
    border-color: ${(props) => props.theme.borderColorButton};
  }

  .setting-option {
    background-color: ${(props) => props.theme.settingOption};
    box-shadow: 4px 4px 10px ${(props) => props.theme.settingOptionShadow};
  }

  /* .container-option {
    box-shadow: 4px 4px 10px ${(props) => props.theme.settingOptionShadow};
  } */

  .btn-settings-option-open {
    box-shadow: ${(props) => props.theme.settingOptionShadowBtn};
    border-color: ${(props) => props.theme.borderColorButton};
    background-color: ${(props) => props.theme.backgroundBodyMedium};
  }

  [disable] {
    cursor: not-allowed;
    opacity: 0.6;
  }         
`;

export default GlobalStyled;
