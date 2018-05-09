var webpack = require('webpack');
var path = require('path');

var rootDir = path.join(__dirname, '../');
var parentDir = path.join(__dirname, '../src/');

module.exports = {
  entry: [
    path.join(parentDir, 'index.jsx')
  ],
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: ['babel-loader', 'eslint-loader']
    }, {
      test: /\.(s*)css$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },
  output: {
    path: rootDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    port:3000,
    contentBase: parentDir,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        pathRewrite: {"^/api": ""},
        changeOrigin: true,
      },
      "/login": {
        target: "http://localhost:8080",
        pathRewrite: {"^/login": ""},
        changeOrigin: true,
        xfwd: true
      }
    }
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}