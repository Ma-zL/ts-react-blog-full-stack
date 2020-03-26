const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = {
    runtimeChunk: {
        name: "manifest"
    },
    splitChunks: {
        cacheGroups: {
            default: false,
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "commones",
                chunks: "initial"
            },
            antd: {
                name: "antd",
                test: /[\\/]node_modules[\\/](antd)[\\/]/,
                chunks: "all",
                priority: 9
            },
            vendor: {
                name: "vendor",
                test: /[\\/]node_modules[\\/](moment|axios)[\\/]/,
                chunks: "all",
                priority: 10
            }
        }
    },
    minimizer: [
        new TerserPlugin({
            cache: true,
            parallel: true
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require("cssnano"),
            cssProcessorOptions: { safe: true, autoprefixer: false, discardComments: { removeAll: true } },
            canPrint: true
        })
    ]
}
