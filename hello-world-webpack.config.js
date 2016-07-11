var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world": [
      'babel-polyfill',
      './app/main.js',
      './app/hello-world.js'
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
      filename: 'hello-world.html',
      template: __dirname + '/app/index.html',
      inject: 'body',
      
      name: 'hello-world'
    })
  ]
};

