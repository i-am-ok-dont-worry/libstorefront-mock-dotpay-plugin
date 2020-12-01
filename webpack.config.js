const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'index.ts'),
    mode: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: [/node_modules/, /dist/, /tests/],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'config': path.resolve(__dirname, 'config')
        }
    },
    output: {
        filename: 'index.js',
        path: path.resolve(process.cwd(), 'dist'),
        library: 'LSFPlugin',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    optimization: {
        minimize: true
    }
};
