const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const PugLoader = require('pug-loader');

module.exports = function(env, argv) {
	const isDevMode = argv.mode.trim() !== 'production';
	process.env.NODE_ENV = (isDevMode) ? 'development' : 'production';

	return {
		mode: process.env.NODE_ENV,
		entry: {
			homepage: './src/homepage.js'
		},
		output: {
			filename: '[name].js',
			path: path.join(__dirname, 'dist')
		},
		module: {
			rules:
			[
				{
					test: /\.pug$/,
					use: 'pug-loader',
					exclude: /node_modules/
				},
				{
					test: /\.(png|jpe?g|gif|svg)$/,
					use: 
					[
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
					]
				}
			]
		},
		plugins:
		[
			new HtmlWebpackPlugin({
				template: './src/homepage.pug',
				filename: './homepage.html',
				inject: false,
				templateParameters: {

				}
			}),
			new CleanWebpackPlugin(),
		]
	}
}