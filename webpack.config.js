const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = (env, { mode }) => {
  const inProd = mode === 'production'
  return {
    entry: './src/demo.js',
    output: {
      path: `${__dirname}/dist`,
      filename: `[name].${inProd ? "[contenthash]." : ""}js`,
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
