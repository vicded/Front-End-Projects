var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


module.exports = {
  watch: true,
  entry: './src/index.js',
  plugins: 
  [
    new HtmlWebpackPlugin({
    template: "./src/template.html"
    }),
    new NodePolyfillPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }, 
      {

        test: /\.(png|svg|jpg|jpeg|gif)$/i,        
        type: 'asset/resource',

      },
    ],

  },
};