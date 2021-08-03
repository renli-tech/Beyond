import React, { forwardRef } from "react";

export interface ButtonProps {
  /**
   * @property onClick
   */
  onClick: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <button {...rest} ref={ref}>
        {children}
      </button>
    );
  }
);
