const webpack    = require('webpack');
const path       = require('path');
const Merge      = require('webpack-merge');
const MainConfig = require('./webpack.main.js');

module.exports = Merge(MainConfig, {
  plugins:   [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    publicPath:         '/',
    port:               9000,
    contentBase:        path.join(process.cwd(), 'dist'),
    host:               'localhost',
    historyApiFallback: true,
    noInfo:             false,
    stats:              'minimal',
    hot:                true,
    open:               true
  }
});