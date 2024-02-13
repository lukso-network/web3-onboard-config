# Contributing to @web3-onboard-config

We want to make contributing to this project as easy and transparent as possible.

## Development

We use a simple branching model to manage our codebase and releases:

1. **Development**: All changes should be made in new branches based off `develop`. Please name your branch with a prefix that describes the type of change and a brief description.
2. **Integrating Changes**: Once your changes are complete, submit a pull request to merge them into `develop`. Our team will review the changes and merge them once approved.
3. **Releasing**: To create a new release, the repository maintainers will merge changes from `develop` into `main`.

## Releases

> **INFO** Releases will only be created by repository maintainers.

1. **Prepare the Release**: Update the `"version"` in the `package.json` file according to the semantic versioning rules below. The change _should_ be done in a _separate_ pull request created off of `develop`.
2. **Merge to Main**: Once the version is updated within `develop` and all final changes are included, merge all open changes from `develop` into `main` by creating another pull request.
3. **Build and Release**: The difference in version triggers the [NPM build](https://www.npmjs.com/package/@lukso/web3-onboard-config) process, which will automatically create a new release on `main`.
4. **Equalize Main and Develop**: After a successful release, the `main` branch will be merged back into `develop` to maintain the entire history of changes and equivalent code bases for future development.

## Versioning

We use [Semantic Versioning](http://semver.org/) (`MAJOR.MINOR.PATCH`) for this repository:

- **MAJOR version** when you make incompatible changes.
- **MINOR version** when you add backward-compatible functionality.
- **PATCH version** when you make backward-compatible bug fixes.

Before you submit a change that affects the version, consider the impact of your changes and update the version number accordingly.

## Getting Started

1. Fork the repo and create your branch from `develop`.
2. Test your changes using [`npm link`](https://docs.npmjs.com/cli/v6/commands/npm-link) on local dApps.
3. Issue a pull request including title, feature, and description.

## Report Bugs

Report a bug on this repository by [opening a new issue](https://github.com/lukso-network/web3-onboard-config/issues).
