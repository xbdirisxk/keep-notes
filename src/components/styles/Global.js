import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    body {
        background-color: #fff;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;       
      }
      
      a {
        text-decoration: none;
      }
      img {
        display: block;
        width: 100%;
      }
      button,
      input,
      textarea {
        border: none;
        outline: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
      }
      button {
        cursor: pointer;
      }
      
`;

export default GlobalStyle;
