const path = require(`path`);
const fs = require(`fs-extra`);

export const copy = (source, dest) => {
  return {
    name: `copy`,
    generateBundle(opts, bundle, isWrite) {
      if (!isWrite) return;
      const cwd = process.cwd();
      const destDir = path.join(cwd, dest);
      const sourceDir = path.join(cwd, source);

      fs.ensureDirSync(destDir);
      fs.copySync(sourceDir, destDir);
    }
  };
};
