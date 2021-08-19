import { ColorName } from "@beyond/theme";

export interface RingProps {
  /**
   * Creates outline rings with CSS `box-shadow` property
   */
  ring?: string | number;
  /**
   * The color of the outline ring
   */
  ringColor?: ColorName | string;
  /**
   * The thickness of the offset shadow when using outline rings
   */
  ringOffset?: string | number;
  /**
   * The color of the offset shadow when adding outline rings
   */
  ringOffsetColor?: ColorName | string;
  ringInset?: boolean;
}
