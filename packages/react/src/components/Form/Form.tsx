import * as React from "react";

import { createComponent, PropsOf } from "@beyond/system";

export interface FormProps extends PropsOf<"form"> {
  children: React.ReactNode[];
}

export const Form: React.FC<FormProps> = props => {
  return createComponent<FormProps>("form", { ...props }, {});
};

Form.displayName = "BeyondForm";
