const debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/src/frontend",
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./js/app.js",
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    modules: [
      path.resolve(__dirname + '/src/frontend/js/'),
      path.resolve(__dirname + '/node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: { importLoaders: 1, modules: true }
          }
        })
      }
    ]
  },
  output: {
    path: __dirname + "/src/frontend/static",
    filename: "app.min.js"
  },
  plugins: debug ? [
    new ExtractTextPlugin("styles.min.css")
  ] : [
    new ExtractTextPlugin("styles.min.css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
