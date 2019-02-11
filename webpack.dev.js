const merge = require('webpack-merge')
const base = require('./webpack.common.js')

module.exports = merge(base, {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  }
})