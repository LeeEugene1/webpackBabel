const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        filename: "index_build.js",
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"],
            },
            {
                test:/\.(jp(e*)g|png|svg)$/,
                use:['file-loader']
            },
        ]
    },
    plugins:[//html-webpack-plugin을 활용하여 html도 합치기
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        // new CleanWebpackPlugin(),//dist내 불필요한 파일제거
    ],
    devServer:{
        static:{
            directory: path.resolve(__dirname,'dist'),
        },
        port:8081
    }
}