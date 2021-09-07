import { BeyondStyles } from "@beyond-ui/system";
import { CSSInterpolation } from "@emotion/css";
import { getFontFamily, getFontSize } from "../../theme/dist";

export const GlobalStyles: BeyondStyles = {
  boxSizing: "border-box"
};

export const GeneralStyles: CSSInterpolation = {
  ...getFontSize("base"),
  fontFamily: getFontFamily("sans")
};
