const path = require('path');

/** @type {import("webpack").Configuration} */
const config = {
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};

module.exports = config;
