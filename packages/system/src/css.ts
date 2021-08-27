import {
  pseudoSelectors,
  SystemProps,
  systemPropsResolvers
} from "./BeyondProps";
import { Theme } from "@beyond-ui/theme";
import { runIfFn, isObject, Dict, isArray, isFunction } from "@beyond-ui/utils";
import { CSSInterpolation } from "@emotion/css";

export type GetCSSFn = (obj: {
  theme?: Theme;
  props: SystemProps;
  pseudos: Dict;
  resolvers: Dict;
}) => {};

export const getCss: GetCSSFn = obj => {
  const { theme, props, pseudos, resolvers } = obj;

  let computedStyles: Dict = {};

  for (const key in props) {
    // used to resolve theming values
    let propValue = props[key as keyof SystemProps];
    propValue = runIfFn(propValue, theme || ({} as Theme));

    if (isObject(propValue)) {
      propValue = getCss({
        theme,
        props: propValue as SystemProps,
        pseudos,
        resolvers
      });
    }

    // check if it is a custom property
    if (key in resolvers) {
      const newKey = resolvers[key];

      if (isArray(newKey)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newKey.forEach((s: any) => {
          computedStyles[s] = propValue;
        });
      }

      if (isFunction(newKey)) {
        propValue = runIfFn(newKey, propValue, props);
        computedStyles = { ...computedStyles, ...(propValue as {}) };
        continue;
      }
      // resolves props that return styles

      computedStyles[newKey] = propValue;
      continue;
    }

    // check if it is a pseudo property
    if (key in pseudos) {
      const newKey = pseudos[key];

      computedStyles[newKey] = propValue;
      continue;
    }

    computedStyles[key] = propValue;
  }

  return computedStyles;
};

export const css = (props: SystemProps) => (
  theme?: Theme
): Array<CSSInterpolation> => {
  const styles = getCss({
    theme,
    props,
    pseudos: pseudoSelectors,
    resolvers: systemPropsResolvers
  });
  return styles as Array<CSSInterpolation>;
};
