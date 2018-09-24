# PostCSS Color Shorthand [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

A [PostCSS] plugin which allows you to define all color properties in one go.

```css
.example {
  color: white red blue;
}
```

Outputs:

```css
.example {
  color: white;
  background-color: red;
  border-color: blue;
}
```

## Setup

Add it to your project:

```bash
npm install postcss-color-shorthand --save-dev
```

[cli-img]: https://img.shields.io/travis/mindthetic/postcss-color-shorthand.svg
[cli-url]: https://travis-ci.org/mindthetic/postcss-color-shorthand
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-color-shorthand.svg
[npm-url]: https://www.npmjs.com/package/postcss-color-shorthand

[PostCSS]: https://github.com/postcss/postcss
