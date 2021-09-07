/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  BeyondStyles,
  createComponent,
  createStyles,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext, useColor, useSpacing } from "@beyond-ui/shared";
import { GeneralStyles, GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
import * as React from "react";
import { ColorName } from "@beyond-ui/theme";
import { Property } from "csstype";

type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
export interface TextInputProps extends SystemProps, PropsOf<"input"> {
  placeHolderColor?: ColorName | Property.Color;
  type?: InputType;
}

export const TextInput: React.FC<TextInputProps> = props => {
  const { children, placeHolderColor, ...restProps } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const elementProps = omitSystemProps(restProps);

  const className = css(
    GeneralStyles,
    {
      border: "none",
      outline: "none",
      borderRadius: useSpacing("3"),
      padding: useSpacing("2"),
      paddingLeft: useSpacing("4"),
      paddingRight: useSpacing("4"),
      width: "max-content",
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      backgroundColor: useColor("gray-100"),
      "::placeholder": {
        color: placeHolderColor
          ? useColor(placeHolderColor!)
          : useColor("gray-400")
      }
    },
    styleFromProps
  );

  return createComponent<TextInputProps>(
    "input",
    { ...elementProps, className: `${className} ${props.className}` },
    style,
    children
  );
};

TextInput.displayName = "BeyondTextInput";
