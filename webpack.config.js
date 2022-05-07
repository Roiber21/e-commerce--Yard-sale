const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Minicssextractplugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath:'./',
	},
    mode:'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias:{
			'@components':path.resolve(__dirname,'src/components/'),
			'@containers':path.resolve(__dirname,'src/containers/'),
			'@pages':path.resolve(__dirname,'src/pages/'),
			'@styles':path.resolve(__dirname,'src/styles/'),
			'@assets':path.resolve(__dirname,'src/assets/'),
			'@icons':path.resolve(__dirname,'src/assets/icons/'),
			'@logos':path.resolve(__dirname,'src/assets/logos/'),
			
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use:[
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			},
			{
				test: /\.(png|svg|gif)$/,
				type:'asset'
			}

		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new Minicssextractplugin({
			filename:'[name].css'
		}),
	],
	devServer: {
		historyApiFallback:true,
		static: {
		  directory: path.join(__dirname, 'public'),
		  },
		compress: true,
		port: 3005,
	  }
}