const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    entry:'./public/index.js',//public
    output:{
        filename: "index_build4.js",
        path:path.resolve(__dirname, 'dist'),
        clean: true,
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
    
    // plugins:[//html-webpack-plugin을 활용하여 html도 합치기
    //     new HtmlWebpackPlugin({
    //         minify:{
    //             collapseWhitespace: true//텍스트노드공백제거
    //         },
    //         hash : true,//캐시무효화
    //         template:'./src/index.ejs',
    //     }),
    // ],
    // devServer:{
    //     static:{
    //         directory: path.resolve(__dirname,'dist'),
    //     },
    //     port:8081
    // }
}