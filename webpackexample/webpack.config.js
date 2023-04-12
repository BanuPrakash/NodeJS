const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry : './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle[hash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test:/\.ts(x)?$/,
                loader:'ts-loader',
                exclude:/node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
}


module.exports = config;