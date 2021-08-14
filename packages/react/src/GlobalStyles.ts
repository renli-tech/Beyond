import { BeyondStyles } from "@beyond/system";
import { getFontFamily, getFontSize, getSize } from "@beyond/theme";

export const GlobalStyles: BeyondStyles = {
  ...getFontSize("base"),
  ...getSize("base"),
  fontFamily: getFontFamily("sans"),
  boxSizing: "border-box"
};
