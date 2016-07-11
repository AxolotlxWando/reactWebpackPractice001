var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    "component-life-cycle": [
      'babel-polyfill',
      './app/main.js',
      './app/component-life-cycle.js'
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
      filename: 'component-life-cycle.html',
      template: __dirname + '/app/index.html',
      inject: 'body',
      
      name: 'Component Life Cycle'
    })
  ]
};

