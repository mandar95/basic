let path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/App.js",
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            serveIndex: true,
        },
        compress: true,
        port: 4400
    }

}