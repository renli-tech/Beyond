import { FontFamilyValue, FontSizeValue, FontWeightValue } from "@beyond/theme";
import { Property } from "csstype";

export interface TypographyProps {
  /**
   * The CSS `font-weight` property
   */
  fontWeight?: FontWeightValue | string | number;
  /**
   * The CSS `line-height` property
   */
  lineHeight?: Property.LineHeight;
  /**
   * The CSS `letter-spacing` property
   */
  letterSpacing?: Property.LetterSpacing;

  /**
   * The CSS `font-size` property
   */
  fontSize?: FontSizeValue | string;
  /**
   * The CSS `font-family` property
   */
  fontFamily?: FontFamilyValue | string;
  /**
   * The CSS `text-align` property
   */
  textAlign?: Property.TextAlign;
  /**
   * The CSS `font-style` property
   */
  fontStyle?: Property.FontStyle;
  /**
   * The CSS `word-break` property
   */
  wordBreak?: Property.WordBreak;
  /**
   * The CSS `overflow-wrap` property
   */
  overflowWrap?: Property.OverflowWrap;
  /**
   * The CSS `text-overflow` property
   */
  textOverflow?: Property.TextOverflow;
  /**
   * The CSS `text-transform` property
   */
  textTransform?: Property.TextTransform;
  /**
   * The CSS `white-space` property
   */
  whiteSpace?: Property.WhiteSpace;
  /**
   * Used to visually truncate a text after a number of lines.
   */
  noOfLines?: number;
  /**
   * The CSS `text-decoration` property
   */
  textDecoration?: Property.TextDecoration;
  /**
   * The CSS `text-decoration` property
   */
  textDecor?: Property.TextDecoration;
  /**
   * The CSS `text-decoration-color` property
   */
  textDecorationColor?: Property.TextDecorationColor;
  /**
   * The CSS `text-decoration-thickness` property
   */
  textDecorationThickness?: Property.TextDecorationThickness;
  /**
   * The CSS `text-decoration-style` property
   */
  textDecorationStyle?: Property.TextDecorationStyle;
  /**
   * The CSS `text-decoration-line` property
   */
  textDecorationLine?: Property.TextDecorationLine;
  /**
   * The CSS `text-underline-offset` property
   */
  textUnderlineOffset?: Property.TextUnderlineOffset;
  /**
   * The `text-shadow` property
   */
  textShadow?: Property.TextShadow;
}
