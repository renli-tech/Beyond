import { CSSInterpolation } from "@emotion/css";

export const extractCssInterpolationFromProps = (props: {}): CSSInterpolation => {
  const interpolation: CSSInterpolation = { ...(props as {}) };

  return interpolation;
};
