Thanks for willing to contribute to Beyond 👌

Here are the folllowing guidelines to contribute to Beyond

## Setup the Project

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/renli-tech/Beyond))

2. Clone your fork

```sh
git clone https://github.com/<your_github_username>/Beyond.git
cd Beyond
```

3. Setup all the dependencies and packages by running `yarn bootstrap`. This
   command will install dependencies and bootstrap the repo using `lerna`

> If you run into any issues during this step, kindly create a Github issue for help

## Development

To improve our development process, we've set up tooling and systems. Beyond
uses a monorepo structure and we treat each package as independent and can be used on it own.

### Tools that we use

- [Lerna](https://lerna.js.org/) to manage the monorepo structure
- [Storybook](https://storybook.js.org/) for UI component development and
  testing
- [Jest](https://jestjs.io/) for testing components and
  hooks
- [Docusaurus](https://docusaurus.io/) for a blazing fast documentation website.
  versioning and changelogs

### Commands

**`yarn bootstrap`**: bootstraps the entire project and symlinks all
dependencies for cross-component development.

**`yarn storybook`**: starts storybook server and loads stories in files that
end with `.stories.tsx`.

**`yarn docs:start`**: run the documentation site locally.

**`yarn build`**: run build for all packages.

**`yarn test`**: run all tests in individual packages.

**`yarn workspace @beyond-ui/[package] run <cmd>`**: Run a command on the specific package you're
working on. You can run `build`, `test` commands.

#### Package Aliasing and Yarn Workspace

Since we're using lerna monorepo + yarn workspaces by default, this enables us
to run commands within packages directly from the root.

Each package is named this way: `@beyond-ui/[component]`. Let's assume we want to
run the test in the theme package. Here's how to do it:

```bash
yarn workspace @beyond-ui/react build

# or

lerna run build --scope @beyond-ui/react
```

### Documentation

The documentation site is built with [Docusaurus](https://docusaurus.io/). If you'd like to contribute to the
docs, simply run `yarn start:docs` to start and `yarn build:docs` to build.

### Storybook

Build components in isolation with Storybook using `yarn storybook`

## Think you found a bug?

Please conform to the issue template and provide a clear path to reproduction
with a code example.

## Proposing new or changed API?

Please provide thoughtful comments and some sample API code. Proposals that
don't line up with our roadmap or don't have a thoughtful explanation will be
closed.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when
the PR author is a collaborator, that counts as one.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`subject(scope or module): message` in your commit message while using one of
the following subjects:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out [What is Commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint).

### Steps to PR

1. Fork of the Beyond repository and clone your fork

2. Create a new branch out of the `master` branch. We follow the convention
   `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/renli-tech/Beyond/blob/main/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `yarn workspace <module> build` and
   `yarn workspace <module> test` to make sure everything works as expected. Please
   note that you might have to run `yarn bootstrap` first in order to install all
   dependencies.

### Tests

All commits that fix bugs or add features need a test.

## License

By contributing your code to the Beyond GitHub repository, you agree to
license your contribution under the [MIT license](./LICENSE).
