const paths = require('./paths')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

//const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.public,
    publicPath: '/',
    //filename: 'js/[name].[contenthash].bundle.js',
    filename: 'bundle.js',
  },
  plugins: [],
  module: {
    rules: [],
  },
  optimization: {},
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})