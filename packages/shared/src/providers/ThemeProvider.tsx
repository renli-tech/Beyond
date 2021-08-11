import { Theme } from "@beyond/theme";
import * as React from "react";

export interface Shared {
    theme: Theme
}
export const ThemeContext = React.createContext<Shared | null>(null);

export interface ThemeProviderProps {
    theme: Theme
}

export const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {

    const { theme, children } = props;

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    )
}