const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MainConfig = require('./webpack.main.js');

module.exports = merge(MainConfig, {
  mode: 'production',
  plugins: [],
});
