const path = require('path');

module.exports={
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    devServer:{
        static:{
            directory: path.join(__dirname, `dist`),
        },
        port:9000
    },
    module: {
        rules:[
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}