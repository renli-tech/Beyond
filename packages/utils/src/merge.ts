export const merge = (...objs: {}[]): {} =>
  objs.reduce(function(acc: {}, val: {}) {
    return Object.assign(acc, val);
  }, {});
