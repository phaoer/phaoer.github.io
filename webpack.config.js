const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build", 
        filename: "bundle.js" 
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }],
        loaders: [{
            test: /\.html$/,
            loader: "html-loader"
        }]
    },
    devServer: {
        contentBase: "./build",
        historyApiFallback: true, 
        inline: true 
    },
    // externals: {
    //     "jquery": 'window.$',
    //     "layui": "window.layui"
    // },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
    ]
}