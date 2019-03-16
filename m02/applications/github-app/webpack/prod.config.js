'use strict'


const webpack = require('webpack')
const validate = require('webpack-validator')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./common')

const crp = new ExtractTextPlugin('crp.css')
const styles = new ExtractTextPlugin('[name]-[hash].css')

module.exports = validate({
  entry: common.entry,
  output: common.output,
  plugins: [
    crp,
    styles,
    new ExtractTextPlugin('[name]-[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
    new HtmlPlugin(common.htmlPluginConfig('template.html')),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    preLoaders: [common.standardPreLoader],
    loaders: [
      common.jsLoader,
      Object.assign({},
        common.cssLoader,
        {
          loaders: undefined,
          loader: ExtractTextPlugin.extract.apply(ExtractTextPlugin, common.cssLoader.loaders)
        })]
  },
  resolve: common.resolve
})
