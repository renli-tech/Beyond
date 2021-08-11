/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import { ThemeContext } from "src/providers";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "Please nake sure to wrap this component in a ThemeProvider"
    );
  }

  const theme = context?.theme;

  return { theme };
};
