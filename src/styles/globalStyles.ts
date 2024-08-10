import { createGlobalStyle } from "styled-components";

// for app styles
export const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #242424;
  }

  * {
    font-family: "Roboto", sans-serif;
  }
`;
