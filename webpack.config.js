const path = require('path');

module.exports = {
  entry: './frontend/mytable.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/], 
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env', '@babel/react'] 
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};