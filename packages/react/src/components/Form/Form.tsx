import * as React from "react";
import {
  BeyondStyles,
  createComponent,
  createStyles,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext } from "@beyond-ui/shared";
import { GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";

export interface FormProps extends SystemProps, PropsOf<"form"> {
  children?: React.ReactNode[];
}

export const Form: React.FC<FormProps> = props => {
  const { children, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const className = css(styleFromProps);

  const style = createStyles<BeyondStyles>({}, GlobalStyles);
  return createComponent<FormProps>(
    "form",
    { ...elementProps, className },
    style,
    children
  );
};

Form.displayName = "BeyondForm";
