const { merge } = require("webpack-merge");
const commenConfig = require("./webpack.commen");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8002,
    historyApiFallback: {
      index: "index.html",
    },
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

module.exports = merge(commenConfig, devConfig);
