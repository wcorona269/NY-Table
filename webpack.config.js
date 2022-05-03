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
        test: [/\.js?$/, /\.jsx?$/, /\.svg$/, /\.(sass|less|css)$/],
        use: ['@svgr/webpack'], 
        exclude: /(node_modules)/,
        loaders: ['babel-loader', 'style-loader', 'css-loader', 'less-loader'],
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

