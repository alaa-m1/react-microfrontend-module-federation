const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commenConfig = require("./webpack.commen");
const { ProvidePlugin} =require('webpack');

const devConfig = {
  cache: false,
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ProvidePlugin({
      React: "react",
      process: "process/browser",
    }),
  ],
};

module.exports = merge(commenConfig, devConfig);
