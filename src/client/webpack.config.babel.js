const { resolve } = require("path");
module.exports = {

    mode: "development",
    entry: "./index.js",
    output: {
        filename: 'main.js',
        path: resolve(__dirname, "..", "..", "bin")
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            }
        ]
    },
    devServer: {
        static: {

        directory: resolve(__dirname, "..", "..", "public")
        }
    }

}