import { colors as BeyondColors } from "./Color";
import { Theme } from "./Theme";

export const defaultTheme: Theme = {
  colors: BeyondColors.red,
  defaults: {
    ring: {
      color: BeyondColors.red[300],
      offset: 0,
      offsetColor: "transparent",
      inset: false
    }
  }
};
