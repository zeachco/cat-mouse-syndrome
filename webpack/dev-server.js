var paths = require('./paths');
module.exports = {
  contentBase: paths.public,
  port: 3000,
  host: '0.0.0.0',
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}
