var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry : [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        'react-hot-loader/patch',
        path.join(__dirname, 'app/index.js')
    ],

    output : {
        path : path.resolve(__dirname, '/'),
        filename : '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.LoaderOptionsPlugin({
        //   debug: true,
        // }),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: true,
            filename: 'index.html'
        }),

        new webpack.NoEmitOnErrorsPlugin(),


    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader :'babel-loader'
            }
        ]
    }
}
