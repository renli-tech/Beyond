import { BeyondStyles } from "@beyond-ui/system";
import { getFontFamily, getFontSize } from "@beyond-ui/theme";

export const GlobalStyles: BeyondStyles = {
  ...getFontSize("sm"),
  fontFamily: getFontFamily("sans"),
  boxSizing: "border-box"
};
