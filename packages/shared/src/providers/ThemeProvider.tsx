import { Theme } from "@beyond/theme";
import * as React from "react";

export interface Shared {
  theme?: Theme;
}
export const ThemeContext = React.createContext<Shared | null>(null);

export interface ThemeProviderProps {
  theme?: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const outerContext = React.useContext(ThemeContext);

  // eslint-disable-next-line react/prop-types
  const { theme: newTheme, children } = props;

  const theme = { ...outerContext?.theme, newTheme };

  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
};
