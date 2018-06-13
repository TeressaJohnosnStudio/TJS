const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: './client/src/main.js',
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map',
  plugins: [new HtmlPlugin({template: __dirname + '/index.html'})],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: ["babel-loader"],
        exclude: /node_modules/
      },
      {test: /\.(scss|css)$/,
        loader: [
        "style-loader",
        "css-loader",
        "sass-loader"
      ]},
    ]
  },
  resolve: {
      extensions: [".js", ".jsx", ".json"]
  }
}

module.exports = config;
