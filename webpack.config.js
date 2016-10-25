module.exports = {
	entry: [
		  'webpack-dev-server/client?http://localhost:8080'
		, './src/index.js'
	]
	, module: {
		loaders: [
			{
				test: /\.js/
				, exclude: /node_modules/
				, loader: 'babel'
			},
				{ test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
					loader: "file"
				},

			 {
				test: /\.css/
				, exclude: /node_modules/
				, loader: 'style-loader!css-loader'
			},

			{
			 test: /.*\.(gif|png|jpe?g|svg)$/i,
			 loaders: [
				 'file?hash=sha512&digest=hex&name=[hash].[ext]',
				 'image-webpack'
			 ]
		 }

		]
	}
	, resolve: {
		extensions: ['', '.js', '.jsx']
	}
	, output: {
		path: __dirname + '/dist'
		, publicPath: '/'
		, filename: 'bundle.js'
	}
	, devServer: {
		  contentBase: './dist'
		, historyApiFallback: true
		, stats: {
			colors: true
		}
	}
};
