const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
	output: {
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
  ],
	devServer: {
    hot: true,
    contentBase: './public',
	},
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
					chunks: 'all',
					enforce: true,
        },
      },
		},
		minimize: true,
	},
});
