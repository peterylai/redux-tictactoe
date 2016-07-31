var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, include: __dirname + '/app',
        loader: 'eslint'
      }
    ],
    loaders: [
      {
        test: /\.js$/, include: __dirname + '/app', 
        loaders: ["react-hot", "babel-loader"]
      },
      { 
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), 
    HTMLWebpackPluginConfig
  ]
};