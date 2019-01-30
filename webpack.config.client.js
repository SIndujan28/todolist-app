const path=require('path')
const webpack=require('webpack')
const CURRENT_WORKING_DIR=process.cwd()
const config={
    name:"browser",
    devtool:"eval-source-map",
    mode:"development",
    entry:[
        "react-hot-loader/patch",
        "webpack-hot-middleware/client?reload=true",
        path.join(CURRENT_WORKING_DIR,'client/main.js')
    ],
    output:{
        path:path.join(CURRENT_WORKING_DIR,'/dist'),
        filename:'bundle.js',
        publicPath:'/dist/',
    },
    module:{
	rules:[
		{
			test:/\.jsx?$/,
			exclude:/node_modules/,
			use:[
				'babel-loader'
				]
 		},{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          }
	     ]
	},
    plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()

		]
}
module.exports=config