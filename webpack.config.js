const path = require('path');

module.exports = {
  entry: './src/BetterEventListener.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'BetterEventListener.js',
    libraryExport: 'default',
    libraryTarget: 'umd',
    library: 'BetterEventListener'
  },
  module: {
  rules: [
    {
       use: {
          loader:'babel-loader',
          options: { presets: ['env'] }
       },
       test: /\.js$/,
       exclude: /node_modules/
    }
  ]
},

};