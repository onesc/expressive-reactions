var webpack = require('webpack');

module.exports = {
		entry: "./source/app.js",
		output: {
			path: __dirname + "/public",
			filename: "/bundle.js"
		},
		module: {
			loaders: [
				{
					exclude:/(node_modules)/,
					loader: 'babel',
					query: {
						presets: ['es2015', 'react']
					}
				}
			]
		},
		// plugins: [
	 //      new webpack.optimize.UglifyJsPlugin({minimize: true})
	 //    ],
		watch: true
}