const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Code Splitting'
    }),
    // CommonsChunkPlugin 插件可以将公共的依赖模块提取到已有的入口 chunk 中，或者提取到一个新生成的 chunk
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common' // 指定公共 bundle 的名称
    // }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
    }, {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader'
        ]
    }]
  }
};