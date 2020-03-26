const MiniCssExtractPlugin = require("mini-css-extract-plugin").loader

const { resolve } = require("./../utils")
const { cacheLoader, threadLoader } = require("./../loaders")

module.exports = [
    {
        test: /\.scss$/,
        include: resolve("src"),
        use: [
            MiniCssExtractPlugin,
            cacheLoader,
            threadLoader(2),
            "css-modules-typescript-loader",
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: "[path][name]-[local]-[hash:5]"
                    }
                }
            },
            {
                loader: "sass-loader",
                options: {
                    sassOptions: {
                        includePaths: [resolve("src/styles")]
                    }
                }
            }
        ]
    },
    // style for antd
    {
        test: /\.less$/,
        use: [
            MiniCssExtractPlugin,
            "css-loader",
            {
                loader: "less-loader",
                options: {
                    javascriptEnabled: true
                }
            }
        ]
    }
]
