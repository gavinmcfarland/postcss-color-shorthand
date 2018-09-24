# Installing PostCSS color-shorthand

[PostCSS color-shorthand] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

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

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use [PostCSS color-shorthand] in your `postcss.config.js` configuration file:

```js
const postcssColor-shorthand = require('postcss-color-shorthand');

module.exports = {
  plugins: [
    postcssColor-shorthand(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use [PostCSS color-shorthand] in your Webpack configuration:

```js
const postcssColor-shorthand = require('postcss-color-shorthand');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssColor-shorthand(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use [React App Rewire PostCSS] and [PostCSS color-shorthand] in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssColor-shorthand = require('postcss-color-shorthand');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssColor-shorthand(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS color-shorthand] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssColor-shorthand = require('postcss-color-shorthand');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssColor-shorthand(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS color-shorthand] in your Gruntfile:

```js
const postcssColor-shorthand = require('postcss-color-shorthand');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssColor-shorthand(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS color-shorthand]: https://github.com/mindthetic/postcss-color-shorthand
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
