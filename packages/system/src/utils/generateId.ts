import { v4 as uuid } from "uuid";

export const generateId = (): string => {
  return "Beyond" + uuid();
};
