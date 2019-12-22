const port = process.env.PORT || 3000;

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path: __dirname + '/public',
    filename: 'app-bundle.js',
    chunkFilename: '[name].js',
  },
  resolve: {
	  modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
  },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          { loader: 'file-loader' },
        ],
      },
    ],
  },
  devServer: {
    port,
    historyApiFallback: true,
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
};
