import * as React from "react";
import { v4 as uuid } from "uuid";

export const generateId = (view: React.ComponentType<any>) => {
  return "Beyond" + view.displayName + uuid();
};
