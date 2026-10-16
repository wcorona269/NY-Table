const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  target: "web",
  mode: isProduction ? 'production' : 'development',
  entry: './frontend/mytable.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.js.map',
  },
  module: {
    rules: [
      {
        test: [/\.js?$/, /\.jsx?$/, /\.(jpg|png|svg)$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        }
      },
      {
        test: [/\.css$/i, /\.scss$/i],
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },
  // Full source maps only in development; production gets a lighter map
  // that doesn't ship readable source, to keep the bundle small.
  devtool: isProduction ? 'nosources-source-map' : 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '*', '.png', '.css'],
  },

  devServer: {
    before(app, server) {
      server._watch(`src/*/**.html`);
    },
    contentBase: path.join(__dirname, 'src'),
    watchContentBase: true,
    hot: true,
  }
};


