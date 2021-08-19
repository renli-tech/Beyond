import { ColorName } from "@beyond-ui/theme";

export interface ColorProps {
  /**
   * The CSS `color` property
   */
  textColor?: ColorName | string;
  /**
   * The CSS `color` property
   */
  color?: ColorName | string;
  /**
   * The CSS `fill` property for icon svgs and paths
   */
  fill?: ColorName | string;
  /**
   * The CSS `stroke` property for icon svgs and paths
   */
  stroke?: ColorName | string;
}
