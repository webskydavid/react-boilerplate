const path = require('path');
const { merge } = require('webpack-merge');
const MainConfig = require('./webpack.main.js');

module.exports = merge(MainConfig, {
  mode: 'development',
});
