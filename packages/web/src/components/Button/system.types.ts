import { Interpolation } from "@emotion/react"
import * as React from "react"
  
  export interface BeyondProps{
    /**
     * Reference styles from any component or key in the theme.
     *
     * @example
     * ```jsx
     * <Box apply="styles.h3">This is a div</Box>
     * ```
     *
     * This will apply styles defined in `theme.styles.h3`
     */
    apply?: string
    /**
     * if `true`, it'll render an ellipsis when the text exceeds the width of the viewport or maxWidth set.
     */
    isTruncated?: boolean
    /**
     * Used to truncate text at a specific number of lines
     */
    noOfLines?: number
    /**
     * The emotion's css style object
     */
    css?: Interpolation<{}>
  }
  
  export type As<Props = any> = React.ElementType<Props>
  
  /**
   * Extract the props of a React element or component
   */
  export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
    as?: As
  }
  
  export type OmitCommonProps<
    Target,
    OmitAdditionalProps extends keyof any = never
  > = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>
  
  export type RightJoinProps<
    SourceProps extends object = {},
    OverrideProps extends object = {}
  > = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps
  
  export type MergeWithAs<
    ComponentProps extends object,
    AsProps extends object,
    AdditionalProps extends object = {},
    AsComponent extends As = As
  > = RightJoinProps<ComponentProps, AdditionalProps> &
    RightJoinProps<AsProps, AdditionalProps> & {
      as?: AsComponent
    }
  
  export type ComponentWithAs<Component extends As, Props extends object = {}> = {
    <AsComponent extends As>(
      props: MergeWithAs<
        React.ComponentProps<Component>,
        React.ComponentProps<AsComponent>,
        Props,
        AsComponent
      >,
    ): JSX.Element
  
    displayName?: string
    propTypes?: React.WeakValidationMap<any>
    contextTypes?: React.ValidationMap<any>
    defaultProps?: Partial<any>
    id?: string
  }
  
  export interface BeyondComponent<T extends As, P = {}>
    extends ComponentWithAs<T, BeyondProps & P> {}
  