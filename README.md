# @wopjs/gzip-size

[![Build Status](https://github.com/wopjs/gzip-size/actions/workflows/build.yml/badge.svg)](https://github.com/wopjs/gzip-size/actions/workflows/build.yml)
[![npm-version](https://img.shields.io/npm/v/@wopjs/gzip-size.svg)](https://www.npmjs.com/package/@wopjs/gzip-size)
Print gzip size of a file.

## Install

```
npm add @wopjs/gzip-size
```

## Usage

`package.json`:

```json
{
  "scripts": {
    "gzip-size": "gzip-size dist/index.mjs dist/index.js"
  }
}
```

## Development

### Publish New Version

You can use [npm version](https://docs.npmjs.com/cli/v10/commands/npm-version) to bump version.

```
npm version patch
```

Push the tag to remote and CI will publish the new version to npm.

```
git push --follow-tags
```

### CI Auto Publish

If you want to publish the package in CI, you need to set the `NPM_TOKEN` secrets [in GitHub repository settings](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository). See how to [create a NPM access token](https://docs.npmjs.com/creating-and-viewing-access-tokens).
