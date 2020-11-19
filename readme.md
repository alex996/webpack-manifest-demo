# webpack-manifest-demo

This branch illustrates an issue with [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin)

To reproduce the issue:

```
git clone https://github.com/alex996/webpack-manifest-demo.git

git checkout copy-webpack-plugin

npm install

npm run build
```

Observe the contents of `manifest.json` with incorrect keys:

```json
{
  "main.js": "main.aed7817769b37c285290.js",
  "img/unsplash/josh-hild.800adf1f33f1fac28546d79527ce3bd8.jpg": "img/unsplash/josh-hild.800adf1f33f1fac28546d79527ce3bd8.jpg",
  "img/unsplash/daniel-sessler.99217f7d9cb04497c0c92f3c0d0f82f1.jpg": "img/unsplash/daniel-sessler.99217f7d9cb04497c0c92f3c0d0f82f1.jpg"
}
```
