'use strict'

const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    common.entry
  ],
  output: Object.assign({}, common.output, {
    filename: '[name].js',
    publicPath: ''
  }),
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name]-[hash].css'),
    new DashboardPlugin(),
    new HtmlPlugin(common.htmlPluginConfig('template.dev.html'))
  ],
  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.cssLoader,
      common.fileLoader,
      common.urlLoader
    ]
  },
  resolve: common.resolve
}