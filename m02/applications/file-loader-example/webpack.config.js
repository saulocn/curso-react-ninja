'use strict'

const { resolve } = require('path')

module.exports = {
    entry: resolve('index.js'),
    output: {
        path: '.',
        filename: 'bundle.js'
    },
    module:{
        rules: [{
            test: /\.(txt|svg|jpg|jpeg|png|gif|ttf|woff|woff2|)$/,
            use: {
                loader: 'file-loader',
                query: {
                    name: '[path][name]-[hash:8].[ext]'
                }
            }
        }]
    }
}