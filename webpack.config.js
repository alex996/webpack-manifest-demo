const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = (env, { mode }) => {
  const inProd = mode === 'production'
  return {
    entry: "./src/demo.js",
    // Another more complex setup: move src/demo.js => src/js/demo.js
    // and change `import './style.css'` to `import '../style.css'`
    // entry: {
    //   'js/demo': './src/js/demo.js'
    // },
    output: {
      path: `${__dirname}/dist`,
      filename: `[name].${inProd ? "[contenthash]." : ""}js`,
      publicPath: ""
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `style.${inProd ? "[contenthash]." : ""}css`,
      }),
      new ManifestPlugin(),
    ]
  }
}
