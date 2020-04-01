const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
                  // must be absolute path
    path: path.resolve(__dirname, './dist' )
  },
  mode: 'none'
}