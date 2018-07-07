const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const open = require('open');

const configPath = 'poder/2018/reef';

const PATHS = {
	staging: path.resolve('/Volumes/staging/arte.folha.com.br/', configPath),
	build: path.resolve(__dirname, '../docs'),
	src: path.resolve(__dirname, '../src'),
	js: path.resolve(__dirname, '../src/assets/scripts'),
	others: path.resolve(__dirname, '../src/assets/others'),
};

// `http://staging.arte.folha.com.br/${configPath}`

// open(`http://staging.arte.folha.com.br/${configPath}`);

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	stats: {
		assets: false,
		colors: true,
		version: false,
		hash: true,
		timings: true,
		chunks: false,
		chunkModules: false,
	},
	watch: true,
	entry: [
		'babel-polyfill',
		path.join(PATHS.js, 'main.js'),
	],
	output: {
		path: path.join(PATHS.staging),
		filename: 'js/main.js',
	},
	plugins: [
		new CleanWebpackPlugin(
			[PATHS.staging],
			{
				root: path.resolve(__dirname, '..'),
				allowExternal: true,
				verbose: true,
			},
		),
		new webpack.NamedModulesPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlPlugin({
			template: path.join(PATHS.src, 'templates/pages/index.pug'),
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
		}),
		new CopyWebpackPlugin([
			{
				from: path.join(PATHS.src, 'assets/images'),
				to: 'images',
				ignore: '.gitkeep',
			},
			{
				from: path.join(PATHS.src, 'assets/json'),
				to: 'json',
				ignore: '.gitkeep',
			},
			{
				from: path.join(PATHS.src, 'assets/others'),
				to: 'others',
				ignore: '.gitkeep',
			},
		]),
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.jsx?$/,
				use: 'eslint-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
				}],
			},
			{
				test: /\.pug$/,
				use: ['pug-loader'],
			},
			{
				test: /\.(css|styl)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname, 'postcss.config.prod.js'),
							},
						},
					},
					'stylus-loader',
				],
			},
			{
				test: /\.(png|gif|jpg|jpeg|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '../images/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.pdf$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '../others/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.(json|geojson)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '../json/[name].[ext]',
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
};
