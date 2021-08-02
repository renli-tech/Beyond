/**
 * Copied from Gatsby
 * https://github.com/gatsbyjs/gatsby/blob/master/scripts/on-lint-error.js
 */

/* eslint-disable no-console */
console.log(`Oops! there are some lint or style warnings in the code for this
commit. Your changes have been committed, but you should fix the warnings before
creating a pull request.

Use 'npm run lint' to manually re-run these checks. You can also disable these
checks:

- for a single commit: git commit --no-verify
- for all future commits: npm run hooks:uninstall
`);
