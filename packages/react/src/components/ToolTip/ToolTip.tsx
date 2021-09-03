import * as React from "react";
import {
  BeyondStyles,
  createComponent,
  createStyles,
  css as BeyondCssFactory
} from "@beyond-ui/system";
import { TextProps } from "../Text";
import { css, keyframes } from "@emotion/css";
import { ThemeContext, useColor } from "@beyond-ui/shared";
import { GlobalStyles } from "../../GlobalStyles";
import { ColorName } from "@beyond-ui/theme";
import { Property } from "csstype";

export type ToolTipPosition = "north" | "south" | "east" | "west";

export interface ToolTipProps extends TextProps {
  toolTipPosition?: ToolTipPosition;
  toolTipBg?: ColorName | Property.Color;
}

export const ToolTip: React.FC<ToolTipProps> = props => {
  const { children, toolTipBg, toolTipPosition, ...restProps } = props;

  const themeContext = React.useContext(ThemeContext);

  const styleFromProps = BeyondCssFactory(restProps)(themeContext?.theme);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getToolTipPositonStyle = () => {
    switch (toolTipPosition) {
      case "north":
        return {
          after: {
            top: "-30px",
            left: "0"
          },
          before: {
            top: "-10px",
            left: "20%"
          }
        };

      case "south":
        return {
          after: {
            bottom: "-32px",
            left: "0"
          },
          before: {
            bottom: "-12px",
            left: "20%"
          }
        };

      case "east":
        return {
          after: {
            left: "100%",
            marginLeft: "8px"
          },
          before: {
            top: "50%",
            bottom: "50%",
            right: "-16px",
            marginTop: "-4px"
          }
        };

      case "west":
        return {
          after: {
            right: "100%",
            marginRight: "6px"
          },
          before: {
            top: "50%",
            bottom: "50%",
            left: "-16px",
            marginTop: "-4px"
          }
        };

      default:
        return {
          after: {
            top: "-30px",
            left: "0"
          },
          before: {
            top: "-10px",
            left: "20%"
          }
        };
    }
  };

  const toolTipAppear = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
  `;

  const className = css(
    {
      position: "relative",
      cursor: "pointer",
      ":hover,:focus,:active": {
        "::after, ::before": {
          display: "inline-block",
          textDecoration: "none",
          animationName: `${toolTipAppear}`,
          animationDuration: ".1s",
          animationFillMode: "forwards",
          animationTimingFunction: "ease-in",
          animationDelay: ".1s"
        }
      },
      "::after": {
        content: `"${props["aria-label"]}"`,
        position: "absolute",
        width: "max-content",
        textAlign: "center",
        textDecoration: "none",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordWrap: "break-word",
        whiteSpace: "pre",
        pointerEvents: "none",
        zIndex: 9999999999999,
        opacity: 0,
        display: "none",
        fontSize: "12px",
        backgroundColor: useColor(toolTipBg || "gray-800"),
        padding: " 2px 8px",
        color: "white",
        borderRadius: "5px",
        ...getToolTipPositonStyle()?.after
      },
      "::before": {
        position: "absolute",
        zIndex: 9999999999999,
        display: "none",
        width: 0,
        height: 0,
        pointerEvents: "none",
        backgroundColor: useColor(toolTipBg || "gray-800"),
        transform: "rotate(45deg)",
        content: '""',
        border: "6px solid transparent",
        borderRadius: "3px",
        opacity: 0,
        ...getToolTipPositonStyle()?.before
      }
    },
    styleFromProps
  );

  const style = createStyles<BeyondStyles>({}, GlobalStyles);

  return createComponent<ToolTipProps>(
    "span",
    { ...props, className },
    style,
    children
  );
};

ToolTip.displayName = "BeyondToolTip";
