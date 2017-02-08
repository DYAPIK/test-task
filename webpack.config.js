var IS_DEV = 'development' === process.env.NODE_ENV;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    name: 'development',
    context: path.join(__dirname),
    entry: {
        app: './index.tsx',
    },
    output: {
        publicPath: '/',
        path: './build/',
        filename: '[name].min.js',
    },

    resolve: {
        alias: {
            app: path.join (__dirname, 'src'),
        },
        root: path.join(__dirname, 'src'),
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    },

    watch: true,

    module: {
        preLoaders: [
            {test: /\.(tsx|ts)?$/, loader: 'source-map-loader', exclude: /node_modules/},
        ],
        loaders: [
            {
                test: /\.css?$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.styl$/,
                loaders: ['style', 'css', 'stylus'],
            },
            {
                test: /\.html$/,
                loader: 'html',
            },
            {
                test: /\.(tsx|ts)?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=build/fonts/[hash].[ext]',
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=100000&name=build/images/[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
                ],
            },
        ],
    },

    // devtool: IS_DEV ? 'source-map' : null,

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
        }),
    ],

    devServer: {
        host: '0.0.0.0',
        port: 8000,
        historyApiFallback: {
            index: '/',
        },
    },
};