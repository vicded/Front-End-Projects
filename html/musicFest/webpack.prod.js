const path = require('path');
const common = require("./webpack.config");
const {merge} = require('webpack-merge');
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = merge(common, {
  mode: 'production',
  output: { 
    path: path.resolve(__dirname, 'dist'),
    filename: './main.[contenthash].js',
  }
});