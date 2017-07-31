var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

var extractLESS = new ExtractTextPlugin('./css/[name].bundle.css');

module.exports = {
  context: path.join(__dirname, "assets"),
  entry: './src/js/app.js',
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        },
      },
      {
        test: /\.less$/,
        use: extractLESS.extract([ 'css-loader', 'less-loader' ])
      }
    ]
  },
  plugins: [
    extractLESS
  ],
  output: {
    filename: './js/bundle.js',
    path: path.join(__dirname, 'assets', 'dist')
  }
}
