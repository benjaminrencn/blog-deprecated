const path = require('path');
const apiMocker = require('webpack-api-mocker');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    test: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    before(app) {
      apiMocker(app, path.resolve('./src/mock.js'));
    },
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Karam',
      template: './src/template.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // https://github.com/istanbuljs/babel-plugin-istanbul
            plugins: ['istanbul'],
          }
        },
      },
    ],
  },
};