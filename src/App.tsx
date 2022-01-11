import { ThemeProvider } from "styled-components";
import "./App.css";
import { Container } from "./components/Container";
import Screen from "./components/DisplayScreen";
import Pad from "./components/Pad";
import { GlobalStyle } from "./components/Styles/GlobalStyles";
import { ThemeButton } from "./components/ThemeButton";
import { useThemeContext } from "./Context/ThemeContext";

import { darkTheme, lightTheme } from "./Theme/Theme";
//import DarkModeIcon from "@material-ui/icons/DarkModeIcon";

function App() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <ThemeButton
          onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <i className="far fa-sun"></i>
          ) : (
            <i className="far fa-moon"></i>
          )}
        </ThemeButton>
        <Screen />
        <Pad></Pad>
      </Container>
    </ThemeProvider>
  );
}

export default App;
