import { ColorName } from "@beyond/theme";
import { Property } from "csstype";

export interface BackgroundProps {
  /**
   * The CSS `background` property
   */
  bg?: ColorName | string;
  /**
   * The CSS `background-clip` property
   */
  bgClip?: Property.BackgroundClip;
  /**
   * The CSS `background-clip` property
   */
  backgroundClip?: Property.BackgroundClip;
  /**
   * The CSS `background` property
   */
  background?: ColorName | string;
  /**
   * The CSS `background-color` property
   */
  bgcolor?: ColorName | string;
  /**
   * The CSS `background-color` property
   */
  backgroundColor?: ColorName | string;
  /**
   * The CSS `background-image` property
   */
  backgroundImage?: Property.BackgroundImage;
  /**
   * The background-gradient shorthand
   */
  bgGradient?: Property.BackgroundImage;
  /**
   * The CSS `background-size` property
   */
  backgroundSize?: Property.BackgroundSize;
  /**
   * The CSS `background-position` property
   */
  bgPos?: Property.BackgroundPosition;
  /**
   * The CSS `background-position` property
   */
  backgroundPosition?: Property.BackgroundPosition;
  /**
   * The CSS `background-image` property
   */
  bgImage?: Property.BackgroundImage;
  /**
   * The CSS `background-repeat` property
   */
  bgRepeat?: Property.BackgroundRepeat;
  /**
   * The CSS `background-repeat` property
   */
  backgroundRepeat?: Property.BackgroundRepeat;
  /**
   * The CSS `background-size` property
   */
  bgSize?: Property.BackgroundSize;
  /**
   * The CSS `background-attachment` property
   */
  bgAttachment?: Property.BackgroundAttachment;
  /**
   * The CSS `background-attachment` property
   */
  backgroundAttachment?: Property.BackgroundAttachment;
  /**
   * The CSS `background-position` property
   */
  bgPosition?: Property.BackgroundPosition;
}
