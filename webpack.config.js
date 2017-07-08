var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry : [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(__dirname, 'app/index.js')
    ],

    output : {
        path : path.resolve(__dirname, '/'),
        filename : 'main.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
        }),
        new webpack.NoEmitOnErrorsPlugin(),

    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader :'babel-loader',
                include: path.join( __dirname, 'app')
            }
        ]
    }
}
