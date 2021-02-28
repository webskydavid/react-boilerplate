const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-cheap-source-map',

  entry: path.resolve(__dirname, './../src/index.js'),

  output: {
    path: path.join(process.cwd(), 'public'),
    filename: '[name].[fullhash].js',
    publicPath: '/',
    sourceMapFilename: '[name].map',
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [path.join(process.cwd(), 'src'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
