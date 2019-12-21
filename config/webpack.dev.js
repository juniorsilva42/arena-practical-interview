const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.common.js');

module.exports = merge(webpackCommonConfig, {
	output: {
		publicPath: '/dist/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
	],
	devtool: "source-map",
	devServer: {
		hot: true,
	}
});

