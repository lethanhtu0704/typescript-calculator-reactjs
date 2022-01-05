import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../../Theme/Theme";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
body {
  background: ${({ theme }) => theme.color}; 
  transition: 0.3s;
}
#root {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
