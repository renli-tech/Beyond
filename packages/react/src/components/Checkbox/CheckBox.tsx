import {
  BeyondStyles,
  createStyles,
  PropsOf,
  SystemProps,
  css as BeyondCssFactory,
  omitSystemProps
} from "@beyond-ui/system";
import { ThemeContext, useColor } from "@beyond-ui/shared";
import { GeneralStyles, GlobalStyles } from "../../GlobalStyles";
import { css } from "@emotion/css";
import * as React from "react";
import { ColorName, getFontSize, getSpacing } from "@beyond-ui/theme";

const CheckBoxInput = React.forwardRef<HTMLInputElement, PropsOf<"input">>(
  (props, ref) => {
    const checkboxStyle = css({
      position: "absolute",
      opacity: 0,
      cursor: "pointer",
      height: 0,
      width: 0
    });

    return React.createElement("input", {
      type: "checkbox",
      ref,
      className: checkboxStyle,
      ...props
    });
  }
);

export interface CheckBoxProps extends SystemProps, PropsOf<"input"> {
  checkedColor?: ColorName | string;
  iconColor?: ColorName | string;
  isReadOnly?: boolean;
}

export const CheckBox: React.FC<CheckBoxProps> = props => {
  const {
    children,
    checkedColor = "sky-600",
    iconColor = "white",
    isReadOnly,
    ...restProps
  } = props;
  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  const elementProps = omitSystemProps(restProps);

  const className = css(
    GeneralStyles,
    {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
      userSelect: "none",
      fontSize: "22px",
      ":hover": {
        "input ~ .checkmark": {
          backgroundColor: props.disabled ? "#eee" : useColor("gray-200")
        }
      },
      "input:checked ~ .checkmark": {
        backgroundColor:
          props.disabled == true ? useColor("gray-200") : useColor(checkedColor)
      },
      "input:checked ~ .checkmark:after": {
        backgroundColor:
          props.disabled == true
            ? useColor("gray-200")
            : useColor(checkedColor),
        display: "block"
      }
    },
    styleFromProps
  );

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  const labelStyle = css({
    ...getFontSize("sm"),
    cursor: "pointer",
    color: props.disabled === true ? "#eee" : "inherit"
  });

  const checkMark = css({
    position: "relative",
    marginRight: getSpacing("1"),
    height: "15px",
    width: "15px",
    borderRadius: getSpacing("0.5"),
    backgroundColor: "#eee",
    ":after": {
      content: '""',
      position: "absolute",
      display: props.disabled === true ? "bloxk" : "none",
      left: "3.75px",
      marginTop: "1px",
      width: "3.5px",
      height: "8px",
      border: `solid ${iconColor}`,
      borderWidth: "0 2px 2px 0",
      transform: "rotate(45deg)"
    }
  });

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onLabelClick = React.useCallback(() => {
    inputRef?.current?.click();
  }, [inputRef]);

  return (
    <span className={`${className} ${props.className}`} style={style}>
      <CheckBoxInput {...elementProps} ref={inputRef} readOnly={isReadOnly} />
      <span className={`${checkMark} checkmark`} onClick={onLabelClick}></span>
      <label className={labelStyle} onClick={onLabelClick}>
        {children}
      </label>
    </span>
  );
};
