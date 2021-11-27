const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: [
		"./src/index.tsx",
		'/src/sass/bootstrap.scss'
	],
	devtool: "eval-source-map",
	resolve: {
		extensions: ['.js', '.ts', '.tsx', ".scss"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
/* 			{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }, */
			{
				test: /\.scss$/, // or /\.css$/i if you aren't using sass
				use: [
					{
					loader: 'style-loader',
					options: { 
						insert: 'head', // insert style tag inside of <head>
						injectType: 'singletonStyleTag' // this is for wrap all your style in just one style tag
					},
					},
					"css-loader",
					"sass-loader"
				],
				},
	]
	},
	plugins: [
		new HtmlWebPackPlugin(
			{
				template: './src/index.html',
				filename: 'index.html'
			}
		)
	],
};