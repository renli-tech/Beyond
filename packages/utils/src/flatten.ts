import { isObject } from "./assertions";

export function flatten<T = { [key: string]: unknown }>(
  obj: T,
  parent?: string,
  res: { [key: string]: unknown } = {}
): {} {
  for (const key in obj) {
    const propName = parent ? parent + "-" + key : key;
    if (isObject(obj[key])) {
      flatten(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}
