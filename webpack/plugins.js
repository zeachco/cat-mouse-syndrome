// Plugins
var WebpackNotifierPlugin = require('webpack-notifier');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = [
  new WebpackNotifierPlugin(),
  new LiveReloadPlugin(),
  new HtmlWebpackPlugin()
];
