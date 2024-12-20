import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --font-primary: "Cookie", cursive;
    --font-secondary: "Mountains of Christmas", cursive;
    --font-third: "Merriweather", serif;
    --bg-color:#b5dcb5; 
  }

  html, body {
    font-family: "Cookie", cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    background-color: var(--bg-color);
    min-height: 100vh;
  }

  a:focus {
    outline: 3px solid #d62828; 
    outline-offset: 2px;
    border-radius: 50%;
  }

  /* Animações */
  @keyframes blink {
    0%, 100% {
      color: #D32F2F; 
      transform: scale(1);
      opacity: 1;
    }
    25% {
      color: #388E3C; 
    }
    50% {
      color: #FFC107; 
      transform: scale(1.1);
      opacity: 0.8;
    }
    75% {
      color: #BBDEFB; 
    }
  }

  @keyframes fly {
    0% {
      right: -100px; 
    }
    100% {
      right: 100vw; 
    }
  }
`;

export default GlobalStyles;
