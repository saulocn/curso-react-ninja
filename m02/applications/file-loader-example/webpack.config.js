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
                loader: 'url-loader',
                query: {
                    limit: 100 //bytes
                }
            }
        }]
    }
}