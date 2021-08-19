// import * as React from "react";
import { ColorName, colors, getColor, Theme } from "@beyond-ui/theme";
import React from "react";
import { useTheme } from "./useTheme";

// TODO: Complete this fuction
export const extractColor = (name: string): string => {
  return name;
};

export const useColor = (name: ColorName | string): string | undefined => {
  const theme = useTheme();
  const colorExistInTheme = React.useCallback(
    (colorName, theme: Theme): boolean => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (colorName in theme.colors!) {
        return true;
      }

      return false;
    },
    [theme]
  );

  const [color, setColor] = React.useState<string | undefined>(name);

  React.useEffect(() => {
    // checking if color already exist theme
    // user-defined theme colors are used instead of the base theme
    if (theme?.colors && colorExistInTheme(name, theme)) {
      setColor(theme.colors[name] as string);
      return;
    }

    if (name in colors) {
      // console.log("found");
      const n = getColor(name as ColorName);
      setColor(n);
      return;
    }

    return setColor(name);
  }, [theme]);

  // console.log(theme);

  return color;
};
