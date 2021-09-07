/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  FontFamilyValue,
  FontSizeValue,
  FontWeightValue,
  getFontSize,
  getFontWeight
} from "@beyond-ui/theme";
import { Property } from "csstype";
import { Token } from "./types";

export const typographyPropsResolver = {
  fontWeight: (prop: FontWeightValue) => ({
    fontWeight: getFontWeight(prop)
  }),
  lineHeight: "lineHeight",
  letterSpacing: "letterSpacing",
  fontSize: (prop: FontSizeValue) => ({
    fontSize: getFontSize(prop)
  }),
  fontFamily: "FontFamilyValue | string",
  textAlign: "textAlign",
  fontStyle: "fontStyle",
  wordBreak: "wordBreak",
  overflowWrap: "overflowWrap",
  textOverflow: "textOverflow",
  textTransform: "textTransform",
  whiteSpace: "whiteSpace",
  noOfLines: "noOfLines",
  textDecoration: "textDecoration",
  textDecor: "textDecoration",
  textDecorationColor: "textDecorationColor",
  textDecorationThickness: "textDecorationThickness",
  textDecorationStyle: "textDecorationStyle",
  textDecorationLine: "textDecorationLine",
  textUnderlineOffset: "textUnderlineOffset",
  textShadow: "textShadow"
};

export interface TypographyProps {
  /**
   * The CSS `font-weight` property
   */
  fontWeight?: Token<FontWeightValue>;
  /**
   * The CSS `line-height` property
   */
  lineHeight?: Token<Property.LineHeight>;
  /**
   * The CSS `letter-spacing` property
   */
  letterSpacing?: Token<Property.LetterSpacing>;

  /**
   * The CSS `font-size` property
   */
  fontSize?: Token<FontSizeValue | string>;
  /**
   * The CSS `font-family` property
   */
  fontFamily?: Token<FontFamilyValue | string>;
  /**
   * The CSS `text-align` property
   */
  textAlign?: Token<Property.TextAlign>;
  /**
   * The CSS `font-style` property
   */
  fontStyle?: Token<Property.FontStyle>;
  /**
   * The CSS `word-break` property
   */
  wordBreak?: Token<Property.WordBreak>;
  /**
   * The CSS `overflow-wrap` property
   */
  overflowWrap?: Token<Property.OverflowWrap>;
  /**
   * The CSS `text-overflow` property
   */
  textOverflow?: Token<Property.TextOverflow>;
  /**
   * The CSS `text-transform` property
   */
  textTransform?: Token<Property.TextTransform>;
  /**
   * The CSS `white-space` property
   */
  whiteSpace?: Token<Property.WhiteSpace>;
  /**
   * Used to visually truncate a text after a number of lines.
   */
  noOfLines?: Token<number>;
  /**
   * The CSS `text-decoration` property
   */
  textDecoration?: Token<Property.TextDecoration>;
  /**
   * The CSS `text-decoration` property
   */
  textDecor?: Token<Property.TextDecoration>;
  /**
   * The CSS `text-decoration-color` property
   */
  textDecorationColor?: Token<Property.TextDecorationColor>;
  /**
   * The CSS `text-decoration-thickness` property
   */
  textDecorationThickness?: Token<Property.TextDecorationThickness>;
  /**
   * The CSS `text-decoration-style` property
   */
  textDecorationStyle?: Token<Property.TextDecorationStyle>;
  /**
   * The CSS `text-decoration-line` property
   */
  textDecorationLine?: Token<Property.TextDecorationLine>;
  /**
   * The CSS `text-underline-offset` property
   */
  textUnderlineOffset?: Token<Property.TextUnderlineOffset>;
  /**
   * The `text-shadow` property
   */
  textShadow?: Token<Property.TextShadow>;
}
