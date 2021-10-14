'use strict'

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const HOST = 'localhost'
const PORT = 8080

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    hot: true,
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    static: {
      publicPath: '/',
    },
    client: {
      logging: 'warn',
      overlay: { warnings: false, errors: true },
    },
    historyApiFallback: true, 
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
