const path = require('path');

module.exports = {
  entry: './_src/js/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /js/,
        exclude: /(node_modules|bower_components)/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        }
      }
    ]
  }
};
