const path = require("path");
const _dirname = path.resolve();

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(_dirname, "dist")
    },
    devServer:{
        contentBase: path.join(_dirname, "dist"),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.s?css/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(svg|jpg)$/,
                use: [
                    "url-loader"
                ]
            }
        ]
    }
}