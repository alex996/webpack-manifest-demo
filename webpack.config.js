const CopyPlugin = require("copy-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = (env, { mode }) => {
  const inProd = mode === 'production'
  return {
    entry: "./src/demo.js",
    output: {
      path: `${__dirname}/dist`,
      filename: `[name].${inProd ? "[contenthash]." : ""}js`,
      publicPath: ""
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "img/",
            to: `img/[path]/[name].${inProd ? "[contenthash]." : ""}[ext]`,
          },
        ],
      }),
      new ManifestPlugin(),
    ]
  }
}
