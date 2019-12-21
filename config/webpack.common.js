const path = require('path');

const outputPath = path.join(__dirname, 'dist');
const port = process.env.PORT || 3000;

module.exports = {
  context: __dirname,
  entry: './src/App.js',
  output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
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
				exclude: /node_modules/
			}
		]
  },
  devServer: {
    port,
    publicPath: './dist',
    hot: true
  }  
};