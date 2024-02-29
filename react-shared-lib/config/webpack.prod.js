const { merge } = require("webpack-merge");
const commenConfig = require("./webpack.commen");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // the name of the bundle
    publicPath:"/react-shared-lib/latest/"
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "react_shared_lib",
      filename: "remoteEntry.js",
      exposes: {
        "./ReactSharedLibIndex": "./src/index",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commenConfig, prodConfig);
