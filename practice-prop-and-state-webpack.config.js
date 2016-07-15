var name = "practice-prop-and-state";

var HtmlWebpackPlugin = require("html-webpack-plugin");
var entryConfig = {};
entryConfig[name] = [
      'babel-polyfill',
      './app/main.js',
      './app/' + name + '.js'
    ];

module.exports = {
  entry: entryConfig,
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
      filename: name + '.html',
      template: __dirname + '/app/index.html',
      inject: 'body',
      
      name: 'Properties and States Practice'
    })
  ]
};

