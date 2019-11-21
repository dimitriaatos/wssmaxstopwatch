const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  entry: path.resolve(__dirname, 'src/client/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public/js'),
  },
  module: { 
    rules: []
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
