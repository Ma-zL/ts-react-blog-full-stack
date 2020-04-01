const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DefinePlugin = require("webpack").DefinePlugin;
const getClientEnvironment = require("./env");
const paths = require("./paths");
const InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

const publicUrl = "";

// Get environment variables to inject into our app.
const env = getClientEnvironment(publicUrl);

module.exports = [
    new HtmlWebpackPlugin({
        template: paths.appHtml,
        inject: true,
    }),
    // new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[name].[contenthash].css",
    }),
    new DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
];
