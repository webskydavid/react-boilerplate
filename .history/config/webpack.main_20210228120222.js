const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  context: path.join(process.cwd(), 'src'),

  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: './index.js',
  },

  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].map',
  },

  resolve: {
    extensions: ['.js'],
    modules: [path.join(process.cwd(), 'src'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
          'sass-loader',
        ],
      }  
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public'], { root: process.cwd() }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};
