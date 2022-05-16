import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    body {
      height: 100vh;
    }
    
    #root{
      height: 100%;
    }
`;
