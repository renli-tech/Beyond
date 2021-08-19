// import * as React from "react";
import { spacings, SpacingName, Theme, getSpacing } from "@beyond-ui/theme";
import React from "react";
import { useTheme } from "./useTheme";

export const useSpacing = (name: SpacingName | string): string | undefined => {
  const theme = useTheme();
  const spacingExistInTheme = React.useCallback(
    (spacingName, theme: Theme): boolean => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (spacingName in theme.spacing!) {
        return true;
      }

      return false;
    },
    [theme]
  );

  const [spacing, setSpacing] = React.useState<string | undefined>(name);

  React.useEffect(() => {
    // checking if spacing already exist theme
    // user-defined theme spacings are used instead of the base theme
    if (theme?.spacing && spacingExistInTheme(name, theme)) {
      setSpacing(theme.spacing[name] as string);
      return;
    }

    if (name in spacings) {
      // console.log("found");
      const n = getSpacing(name as SpacingName);
      setSpacing(n);
      return;
    }

    return setSpacing(name);
  }, [theme]);

  // console.log(theme);

  return spacing;
};
