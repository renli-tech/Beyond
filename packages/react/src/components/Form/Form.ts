import * as React from "react";

import { createComponent } from "@beyond/system";

export interface FormProps {
  children: React.ReactNode[];
}

export const Form: React.FC<FormProps> = props => {
  return createComponent<FormProps>("form", { ...props }, {});
};

Form.displayName = "BeyondForm";
