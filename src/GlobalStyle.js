import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}
  
*,
::after,
::before {
 box-sizing: inherit;
}

#root {
    font-family: 'Playfair Display', serif;
    min-height: 100vh;
    padding: 25px;
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    word-break: break-word;
}
`;
