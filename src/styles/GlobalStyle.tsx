import { createGlobalStyle } from "styled-components";
import { themes } from "./ColorStyles";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${themes.light.backgroundColor};
    margin: 0;
    padding: 0;

    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    }

  }
`;
export default GlobalStyle;
