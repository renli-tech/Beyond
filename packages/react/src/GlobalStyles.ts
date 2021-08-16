import { BeyondStyles } from "@beyond/system";
import { getFontFamily, getFontSize } from "@beyond/theme";

export const GlobalStyles: BeyondStyles = {
  ...getFontSize("sm"),
  fontFamily: getFontFamily("sans"),
  boxSizing: "border-box"
};
