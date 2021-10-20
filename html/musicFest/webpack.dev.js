const path = require('path');
const common = require("./webpack.config");
const {merge} = require('webpack-merge');
//const ImageminPlugin = require("imagemin-webpack");


module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './main.js',
  }
});