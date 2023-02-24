import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
      margin: 0;
      box-sizing: border-box;
   }

   *:focus{
      border: none;
      outline: none;
   }

   *::-webkit-scrollbar {
    width: 3px;
    border-radius: 5px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #b8b4b4;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }

   body{
      min-width: 100vw;
      min-height: 100vh;
      background-color: #222530;
      color: #6c747a;
      font-family: "Q", sans-serif, Consolas;
      letter-spacing: .6px;
      overflow-x: hidden;
   }

   a{
      all: unset;
   }
`;
