var webpack = require('webpack');
var path = require('path');

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
            },{
                test:/\.(s*)css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "http://community-dot-flock-61206.appspot.com",
                pathRewrite: {"^/api" : ""},
                changeOrigin: true
            }, 
            "/login": {
                target: "http://community-dot-flock-61206.appspot.com",
                pathRewrite: {"^/login" : ""},
                changeOrigin: true
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