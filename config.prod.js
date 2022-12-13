let path = require("path")

module.exports = {
    mode: "production",
    entry: "./src/App.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }]
    }

}