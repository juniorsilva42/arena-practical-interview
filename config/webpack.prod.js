const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common');

module.exports = merge(webpackCommonConfig, {
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			minimize: true,
			sourceMap: false,
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
	],
	devServer: {
		compress: true,
	},
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
});
