var prefixer = '!autoprefixer-loader?browsers=last 2 versions';

module.exports = [{
  test: /\.css$/,
  loader: 'style!css' + prefixer
}, {
  test: /\.scss$/,
  loader: 'style!css' + prefixer + '!sass'
}, {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}, {
  test: /\.ts$/,
  loader: 'ts-loader'
}, {
  test: /\.js$/,
  loader: 'eslint-loader',
  exclude: /node_modules/
}, {
  test: /\.json[0-9]?$/,
  loader: 'json-loader'
}, {
  test: /\.html$/,
  loader: 'ng-cache?prefix=[dir]/[dir]'
}, {
  test: /\.png$/,
  loader: 'url?name=img/[name].[ext]&mimetype=image/png'
}, {
  test: /\.gif$/,
  loader: 'url?name=img/[name].[ext]&mimetype=image/gif'
}];
