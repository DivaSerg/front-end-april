const webpack = require('webpack');

/* TODO : попробуйте запустить у себя с нормальным путем */

module.exports = {
    entry: '.\\app\\app.js',
    output: {
    	path: __dirname + '/build/',
        filename: 'build.js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', 'js']
    },

    devtool: 'cheap-inline-module-source-map',

    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [/node_modules/],
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
}
