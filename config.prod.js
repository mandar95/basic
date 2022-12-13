let path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    }

}