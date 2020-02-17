const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: path.resolve(__dirname, './src/client/index.js'),
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './public/js'),
	},
	module: { 
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	resolve: {
		extensions: ['.js']
	},
}
