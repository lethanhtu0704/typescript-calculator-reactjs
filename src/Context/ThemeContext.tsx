import React, { createContext } from "react";

export interface ThemeContextData {
  theme: string;
  toggleTheme: (theme: string) => void;
}

export const themeContextDataDefault: ThemeContextData = {
  theme: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextData>(themeContextDataDefault);

export default ThemeContext;
export const useThemeContext = () => React.useContext(ThemeContext);
