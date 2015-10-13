'use strict';
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var APP = __dirname + '/app';
var DIST = __dirname + '/dist';

module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', './app/core/bootstrap.js']
	},
	output: {
		path: DIST,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},
	postcss: function() {
		return [autoprefixer, precss]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};