// import * as React from "react";
import { ColorName, colors, extractColor } from "@beyond-ui/theme";
import React from "react";
import { merge } from "@beyond-ui/utils";
import { useTheme } from "./useTheme";
import { Property } from "csstype";

export const useColor = (
  name: ColorName | Property.Color
): string | undefined => {
  const theme = useTheme();

  const [color, setColor] = React.useState<string | undefined>("");

  React.useEffect(() => {
    // checking if color already exist theme
    // user-defined theme colors are used instead of the base theme
    const val = extractColor(name, merge(colors, theme?.colors || {}));

    return setColor(val);
  }, [theme]);

  // console.log(theme);
  return color;
};
