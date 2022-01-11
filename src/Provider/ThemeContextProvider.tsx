import { ReactNode, useState } from "react";
import ThemeContext, { themeContextDataDefault } from "../Context/ThemeContext";
interface ThemeContextProps {
  children: ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
  const [theme, setTheme] = useState(themeContextDataDefault.theme);

  const toggleTheme = (theme: string) => {
    setTheme(theme);
  };
  const themeContextDatatest = {
    theme,
    toggleTheme: toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeContextDatatest}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
