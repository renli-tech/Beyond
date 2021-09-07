import { Dict, merge } from "@beyond-ui/utils";
import { BackgroundProps, backgroundPropsResolvers } from "./background.props";
import { BorderProps, borderPropsResolvers } from "./border.props";
import { ColorProps, colorPropsResolver } from "./color.props";
import { EffectProps, effectPropsResolver } from "./effect.props";
import { FlexboxProps, flexboxPropsResolvers } from "./flex.props";
import { GridProps, gridPropsResolver } from "./grid.props";
import {
  InteractionProps,
  interactionPropsResolver
} from "./interaction.props";
import { LayoutProps, layoutPropsResolver } from "./layout.props";
import {
  MediaQueriesProps,
  mediaQueriesPropsResolver
} from "./mediaQueries.props";
import { PositionProps, positionPropsResolvers } from "./position.props";
import { PseudoProps, pseudoSelectors } from "./pseudo.props";
import { RingProps, ringPropsResolvers } from "./ring.props";
import { SpacingProps, spacingPropsResolvers } from "./spacing.props";
import { TransformProps, transformPropsResolvers } from "./transform.props";
import { TypographyProps, typographyPropsResolver } from "./typography.props";

export * from "./color.props";
export * from "./background.props";
export * from "./border.props";
export * from "./ring.props";
export * from "./spacing.props";
export * from "./effect.props";
export * from "./flex.props";
export * from "./grid.props";
export * from "./interaction.props";
export * from "./typography.props";
export * from "./layout.props";
export * from "./position.props";
export * from "./transform.props";
export * from "./pseudo.props";

export interface SystemProps
  extends ColorProps,
    BackgroundProps,
    BorderProps,
    RingProps,
    SpacingProps,
    EffectProps,
    FlexboxProps,
    GridProps,
    InteractionProps,
    TypographyProps,
    LayoutProps,
    PositionProps,
    TransformProps,
    PseudoProps,
    MediaQueriesProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export const systemPropsResolvers = merge(
  colorPropsResolver,
  backgroundPropsResolvers,
  effectPropsResolver,
  gridPropsResolver,
  ringPropsResolvers,
  mediaQueriesPropsResolver,
  flexboxPropsResolvers,
  layoutPropsResolver,
  positionPropsResolvers,
  transformPropsResolvers,
  spacingPropsResolvers,
  borderPropsResolvers,
  interactionPropsResolver,
  pseudoSelectors,
  typographyPropsResolver
);

const keysOfSystemProps = Object.keys(systemPropsResolvers);

export const omitSystemProps = (props: Dict<{}>): Dict<{}> => {
  const result: Dict<{}> = {};
  Object.keys(props).forEach(k => {
    if (keysOfSystemProps.includes(k)) {
      return;
    }
    result[k] = props[k];
  });

  return result;
};
