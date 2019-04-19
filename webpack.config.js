const webpack = require('webpack');

module.exports = {
    entry: {
        main: __dirname + "/app/main.js",
        vendor: ['react', 'react-dom']
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }],
                exclude: /node_modules/
            },
            { //antd样式处理
                test: /\.css$/,
                exclude: /app/,
                use: [{
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg)$/,
                use: {
                    loader: "url-loader"
                },
                exclude: /node_modules/
            }

        ]
    },
    //    externals: {  //将外部变量引入，或者将不想被打包的模块引入，页面必须使用require或者import引入，换用providerPlugin则无需引入 但必须安装该模块
    //     "jquery": 'window.$',
    // },
    devServer: {
        contentBase: "./", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.SplitChunksPlugin({
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
                //打包第三方类库
                vendor: {
                    chunks: 'all',
                    test: /[\\/]node_modules[\\/]/,
                    maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    minSize: 0, // This is example is too small to create commons chunks
                    name: 'vendor'
                },
                //打包重复出现的代码
                // commons: {
                //   name: "commons",
                //   chunks: "initial",
                //   minChunks: Infinity
                // }
            }
        })
        // new webpack.optimize.CommonsChunkPlugin({   
        // 	name:['common','vendor'],     //   将符合引用次数(minChunks)的模块打包到name参数的数组的第一个块里（chunk）,然后数组后面的块依次打包 (查找entry里的key,没有找到相关的key就生成一个空的块)
        //        minChunks:2,       //Infinity   确保不会有其他公共块打包进来
        // }),

    ],
}