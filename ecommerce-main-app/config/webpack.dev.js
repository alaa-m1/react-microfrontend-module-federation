const { merge } = require("webpack-merge");
const commenConfig = require("./webpack.commen");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const devConfig = {
  cache: false,
  mode: "development",
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ecommerce_app",
      remotes: {
        shopping: "shopping@http://localhost:8001/remoteEntry.js",
        auth: "auth@http://localhost:8003/remoteEntry.js",
        reactSharedLib: "react_shared_lib@http://localhost:8002/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),                             
  ],
};

module.exports = merge(commenConfig, devConfig);
