import { BackgroundProps } from "./background.props";
import { BorderProps } from "./border.props";
import { ColorProps } from "./color.props";
import { EffectProps } from "./effect.props";
import { FlexboxProps } from "./flex.props";
import { GridProps } from "./grid.props";
import { InteractionProps } from "./interaction.props";
import { LayoutProps } from "./layout.props";
import { PositionProps } from "./position.props";
import { PseudoProps } from "./pseudo.props";
import { RingProps } from "./ring.props";
import { SpacingProps } from "./spacing.props";
import { TransformProps } from "./transform.props";
import { TypographyProps } from "./typography.props";

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

export type SystemProps = ColorProps &
  BackgroundProps &
  BorderProps &
  RingProps &
  SpacingProps &
  EffectProps &
  FlexboxProps &
  GridProps &
  InteractionProps &
  TypographyProps &
  LayoutProps &
  PositionProps &
  TransformProps &
  PseudoProps;
