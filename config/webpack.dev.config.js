var webpack = require('webpack');
var path = require('path');

var rootDir = path.join(__dirname, '../');
var parentDir = path.join(__dirname, '../src/');

module.exports = {
  entry: [
    path.join(parentDir, 'index.jsx')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }, {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
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
      "/api/**": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
      "/login": {
        target: "http://localhost:8080",
        changeOrigin: true,
        xfwd: true
      },
      "/oauth2": {
        target: "http://localhost:8080",
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