const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')

module.exports = {

    entry: {
        main: path.resolve(__dirname, './src/index.js')
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.bundle.js'
    },

    mode: 'development',

    plugins: [

        new HtmlWebpackPlugin({
            title: 'Главная страница',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
            title: 'Обо мне',
            template: path.resolve(__dirname, './src/pages/about.html'),
            filename: 'about.html'
        }),

        new CleanWebpackPlugin(),

    ]

}