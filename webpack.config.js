const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: "./src/index.tsx",
    output: {
        library: 'app',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: `app.bundle.js`,
    },
    mode: isProduction ? 'production' : 'development',
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
        port: 9090,
        compress: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            title: 'HyperActive',
            templateContent: ({ htmlWebpackPlugin }) => '<!DOCTYPE html><html><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>' + htmlWebpackPlugin.options.title + '</title></head><body><div id=\"app\"></div></body></html>',
            filename: 'index.html',
        })
    ],
};