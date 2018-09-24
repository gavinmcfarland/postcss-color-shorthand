# PostCSS color-shorthand [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS color-shorthand] lets you do this in CSS.

```pcss
.example {}

/* becomes */

.example {}
```

## Usage

Add [PostCSS color-shorthand] to your project:

```bash
npm install postcss-color-shorthand --save-dev
```

Use [PostCSS color-shorthand] to process your CSS:

```js
const postcssColor-shorthand = require('postcss-color-shorthand');

postcssColor-shorthand.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssColor-shorthand = require('postcss-color-shorthand');

postcss([
  postcssColor-shorthand(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

[PostCSS color-shorthand] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

[cli-img]: https://img.shields.io/travis/mindthetic/postcss-color-shorthand.svg
[cli-url]: https://travis-ci.org/mindthetic/postcss-color-shorthand
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-color-shorthand.svg
[npm-url]: https://www.npmjs.com/package/postcss-color-shorthand

[PostCSS]: https://github.com/postcss/postcss
[PostCSS color-shorthand]: https://github.com/mindthetic/postcss-color-shorthand
