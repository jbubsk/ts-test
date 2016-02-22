module.exports = {
    entry: './static/src/start',
    output: {
        path: 'build',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    resolve: {
        root: __dirname + '/node_modules',
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    resolveLoader: {
        root: __dirname + '/node_modules',
        modulesDirectories: ['/node_modules']

    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
};
