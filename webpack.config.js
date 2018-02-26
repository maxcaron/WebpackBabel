const path = require('path')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
}
