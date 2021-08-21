export function flatten<T = { [key: string]: unknown }>(
  obj: T,
  parent?: string,
  res: { [key: string]: unknown } = {}
): {} {
  for (const key in obj) {
    const propName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flatten(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}
