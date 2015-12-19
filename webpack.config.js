var path = require('path');
var paths = require('./webpack/paths');
module.exports = {
  resolve: {
    root: path.resolve('./' + paths.app),
    extensions: ['', '.webpack.js', '.web.js', '.js']
  },
  context: __dirname + '/' + paths.app,
  entry: path.resolve(__dirname, paths.app),
  devServer: require('./webpack/dev-server'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, paths.public),
    filename: paths.bundleName
  },
  module: {
    loaders: require('./webpack/loaders')
  },
  plugins: require('./webpack/plugins')
};
