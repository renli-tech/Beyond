import { Property } from "csstype";
import { SystemProps } from "./index";
import { SpacingName, isOfTypeSpacing, getSpacing } from "@beyond-ui/theme";
import { Token } from "./types";

export function resolveSpace<T>(f: string) {
  return (prop: SpacingName | T): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      [f]: finalValue
    };
  };
}

export const spacingPropsResolvers = {
  m: resolveSpace<Property.Margin>("margin"),
  margin: resolveSpace<Property.Margin>("margin"),
  mt: resolveSpace<Property.MarginTop>("marginTop"),
  ml: resolveSpace<Property.MarginLeft>("marginLeft"),
  mb: resolveSpace<Property.MarginBottom>("marginBottom"),
  mr: resolveSpace<Property.MarginRight>("marginRight"),
  p: resolveSpace<Property.Padding>("padding"),
  padding: resolveSpace<Property.Padding>("padding"),
  pt: resolveSpace<Property.PaddingTop>("paddingTop"),
  pl: resolveSpace<Property.PaddingLeft>("paddingLeft"),
  pb: resolveSpace<Property.PaddingBottom>("paddingBottom"),
  pr: resolveSpace<Property.PaddingRight>("paddingRight"),
  mx: (prop: SpacingName | Property.Margin): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      marginRight: finalValue,
      marginLeft: finalValue
    };
  },
  marginHorizontal: (prop: SpacingName | Property.Margin): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      marginRight: finalValue,
      marginLeft: finalValue
    };
  },
  my: (prop: SpacingName | Property.Margin): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      marginTop: finalValue,
      marginBottom: finalValue
    };
  },
  marginVertical: (prop: SpacingName | Property.Margin): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      marginRight: finalValue,
      marginLeft: finalValue
    };
  },
  px: (prop: SpacingName | Property.Padding): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      paddingRight: finalValue,
      paddingLeft: finalValue
    };
  },
  py: (prop: SpacingName | Property.Padding): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      paddingRight: finalValue,
      paddingLeft: finalValue
    };
  },
  paddingHorizontal: (prop: SpacingName | Property.Padding): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      paddingRight: finalValue,
      paddingLeft: finalValue
    };
  },
  paddingVertical: (prop: SpacingName | Property.Padding): SystemProps => {
    const finalValue = isOfTypeSpacing(prop)
      ? getSpacing(prop as SpacingName)
      : prop;
    return {
      paddingTop: finalValue,
      paddingBottom: finalValue
    };
  },
  marginTop: resolveSpace<Property.MarginTop>("marginTop"),
  marginRight: resolveSpace<Property.MarginRight>("marginRight"),
  marginBottom: resolveSpace<Property.MarginBottom>("marginBottom"),
  marginLeft: resolveSpace<Property.MarginLeft>("marginLeft"),
  paddingTop: resolveSpace<Property.PaddingTop>("paddingTop"),
  paddingRight: resolveSpace<Property.PaddingRight>("paddingRight"),
  paddingBottom: resolveSpace<Property.PaddingBottom>("paddingBottom"),
  paddingLeft: resolveSpace<Property.PaddingLeft>("paddingLeft")
};

export interface SpacingProps {
  /**
   * Margin on top, left, bottom and right
   */
  m?: Token<SpacingName | Property.Margin>;
  /**
   * Margin on top, left, bottom and right
   */
  margin?: Token<SpacingName | Property.Margin>;
  /**
   * Margin on top
   */
  mt?: Token<SpacingName | Property.MarginTop>;
  /**
   * Margin on top
   */
  marginTop?: Token<SpacingName | Property.MarginTop>;
  /**
   * Margin on right
   */
  mr?: Token<SpacingName | Property.MarginRight>;
  /**
   * Margin on right
   */
  marginRight?: Token<SpacingName | Property.MarginRight>;
  /**
   * Margin on bottom
   */
  mb?: Token<SpacingName | Property.MarginBottom>;
  /**
   * Margin on bottom
   */
  marginBottom?: Token<SpacingName | Property.MarginBottom>;
  /**
   * Margin on left
   */
  ml?: Token<SpacingName | Property.MarginLeft>;
  /**
   * Margin on left
   */
  marginLeft?: Token<SpacingName | Property.MarginLeft>;
  /**
   * Margin on left and right
   */
  mx?: Token<SpacingName | Property.Margin>;
  /**
   * Margin on left and right
   */
  marginHorizontal?: Token<SpacingName | Property.Margin>;
  /**
   * Margin on top and bottom
   */
  my?: Token<SpacingName | Property.Margin>;
  /**
   * Margin on top and bottom
   */
  marginVertical?: Token<SpacingName | Property.Margin>;
  /**
   * Padding on top, left, bottom and right
   */
  p?: Token<SpacingName | Property.Padding>;
  /**
   * Padding on top, left, bottom and right
   */
  padding?: Token<SpacingName | Property.Padding>;
  /**
   * Padding on top
   */
  pt?: Token<SpacingName | Property.PaddingTop>;
  /**
   * Padding on top
   */
  paddingTop?: Token<SpacingName | Property.PaddingTop>;
  /**
   * Padding on right
   */
  pr?: Token<SpacingName | Property.PaddingRight>;
  /**
   * Padding on right
   */
  paddingRight?: Token<SpacingName | Property.PaddingRight>;
  /**
   * Padding on bottom
   */
  pb?: Token<SpacingName | Property.PaddingBottom>;
  /**
   * Padding on bottom
   */
  paddingBottom?: Token<SpacingName | Property.PaddingBottom>;
  /**
   * Padding on left
   */
  pl?: Token<SpacingName | Property.PaddingLeft>;
  /**
   * Padding on left
   */
  paddingLeft?: Token<SpacingName | Property.PaddingLeft>;
  /**
   * Padding on left and right
   */
  px?: Token<SpacingName | Property.Padding>;
  /**
   * Padding on left and right
   */
  paddingHorizontal?: Token<SpacingName | Property.Padding>;
  /**
   * Padding on top and bottom
   */
  py?: Token<SpacingName | Property.Padding>;
  /**
   * Padding on top and bottom
   */
  paddingVertical?: Token<SpacingName | Property.Padding>;
}
