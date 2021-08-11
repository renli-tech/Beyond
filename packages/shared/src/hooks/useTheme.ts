/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from "react";
import { ThemeContext } from "../providers";

export const useTheme = () => {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      "Please make sure to wrap this component in a ThemeProvider."
    );
  }

  const theme = context?.theme;

  return theme;
};
