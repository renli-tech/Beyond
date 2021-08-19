import * as React from "react";

import { createComponent, PropsOf, SystemProps } from "@beyond/system";

export interface FormProps
  extends SystemProps,
    Omit<PropsOf<"form">, keyof SystemProps> {
  children: React.ReactNode[];
}

export const Form: React.FC<FormProps> = props => {
  return createComponent<FormProps>("form", { ...props }, {});
};

Form.displayName = "BeyondForm";
