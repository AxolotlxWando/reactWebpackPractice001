var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "passing-a-list-to-a-child-component-with-a-setter-method": [
      'babel-polyfill',
      './app/main.js',
      './app/passing-a-list-to-a-child-component-with-a-setter-method.js'
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
      filename: 'passing-a-list-to-a-child-component-with-a-setter-method.html',
      template: __dirname + '/app/index.html',
      inject: 'body',
      
      name: 'Passing a List to a Child Component with a Setter Method'
    })
  ]
};

