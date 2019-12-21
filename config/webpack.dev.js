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
  devtool: "source-map",
	devServer: {
    hot: true,
    contentBase: './public',
	}
});

