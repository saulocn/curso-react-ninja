'use strict'


const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = {
  entry: common.entry,
  output: common.output,
  plugins: [
    crp,
    styles,
    new ExtractTextPlugin({
      filename: '[name]-[hash].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new HtmlPlugin(common.htmlPluginConfig('template.html')),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
  ],
  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      Object.assign({},
        common.cssLoader,
        {
          use: ExtractTextPlugin.extract.apply({
            fallback: common.cssLoader.loaders[0],
            use: common.cssLoader.loaders.slice(1)
          })
        })]
  },
  resolve: common.resolve
}
