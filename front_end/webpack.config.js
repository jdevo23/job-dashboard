const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  devServer: {
    static: path.join(__dirname, "public/"),
    port: 3000,
    hot: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new ForkTsCheckerWebpackPlugin()],
};
