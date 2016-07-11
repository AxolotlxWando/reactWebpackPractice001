var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "passing-a-list-to-a-child-component": [
      'babel-polyfill',
      './app/main.js',
      './app/passing-a-list-to-a-child-component.js'
    ]
  },
  module: {
    loaders: [
      { test:/\.js$/, include: __dirname + '/app', loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  output: {
    filename: "[name]-bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'passing-a-list-to-a-child-component.html',
      template: __dirname + '/app/index.html',
      inject: 'body',
      
      name: 'Passing a List to a Child Component'
    })
  ]
};

