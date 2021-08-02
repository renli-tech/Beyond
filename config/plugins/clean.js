const path = require(`path`);
const fs = require(`fs-extra`);

export const clean = dest => {
  return {
    name: `clean`,
    buildStart() {
      const cwd = process.cwd();
      const destDir = path.join(cwd, dest);
      fs.removeSync(destDir);
    }
  };
};
