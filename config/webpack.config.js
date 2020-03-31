const { resolve } = require("./utils");
const jsRules = require("./rules/jsRules");
const plugins = require("./plugins");
const styleRules = require("./rules/styleRules");
const optimization = require("./optimization");

const idDev = process.env.NODE_ENV === "development";
const publicPath = "/";

/**
 * @type {import("wbepack").Configuration}
 */

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        app: resolve("src/index.tsx"),
    },
    output: {
        path: resolve("build"),
        filename: idDev ? "[name].js" : "[name].[chunkhash].js",
        chunkFilename: idDev ? "[name].js" : "[name].[chunkhash].js",
        publicPath: publicPath,
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        alias: {
            "@views": resolve("src/containers/views"),
            "@constants": resolve("src/constants"),
            "@services": resolve("src/services"),
            "@shared": resolve("src/containers/shared"),
            "@store": resolve("src/store"),
            "@utils": resolve("src/utils"),
            "@assets": resolve("src/assets"),
            "@components": resolve("src/components"),
            "@modules": resolve("src/modules"),
        },
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [...plugins],
    module: {
        rules: [...jsRules, ...styleRules],
    },
    devtool: idDev ? "source-map" : undefined,
    optimization: idDev ? {} : optimization,
};
