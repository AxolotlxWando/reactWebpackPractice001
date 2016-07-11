var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "hello-world-with-ability-to-change-state": [
      'babel-polyfill',
      './app/main.js',
      './app/hello-world-with-ability-to-change-state.js'
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
      filename: 'hello-world-with-ability-to-change-state.html',
      template: __dirname + '/app/index.html',
      inject: 'body',
      
      name: 'Hello World with Ability to Change State'
    })
  ]
};

