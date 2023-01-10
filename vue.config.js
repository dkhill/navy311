const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new MinifyPlugin()
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin()],
    },
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
