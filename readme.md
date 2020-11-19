# webpack-manifest-demo

This branch illustrates an issue with [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin)

To reproduce the issue:

```
git clone https://github.com/alex996/webpack-manifest-demo.git

git checkout mini-css-extract-plugin

npm install

npm run build
```

## Simple Example

```sh
/src
  demo.js
  style.css
```

```js
// webpack.config.js
entry: "./src/demo.js",
```

```jsonc
// dist/manifest.json
{
  "main.css": "style.b248c6e8f370b3bc8646.css", // <--- key should be "style.css"
  "main.js": "main.3cf1156c43d58afb8952.js"
}
```

## More Complex Example

```sh
/src
  /js
    demo.js
  style.css
```

```js
// webpack.config.js
entry: {
  'js/demo': './src/js/demo.js'
},
```

```jsonc
// dist/manifest.json
{
  "js/demo.css": "style.b248c6e8f370b3bc8646.css", // <--- key should be "style.css"
  "js/demo.js": "js/demo.3cf1156c43d58afb8952.js"
}
```
