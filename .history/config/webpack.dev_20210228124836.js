const path = require('path');
const { merge } = require('webpack-merge');
const MainConfig = require('./webpack.main.js');

module.exports = merge(MainConfig, {
  mode: 'development',
  devServer: {
    publicPath: '/',
    port: 9000,
    contentBase: path.join(process.cwd(), 'dist'),
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    hot: true,
    open: true,
  },
});
