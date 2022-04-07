module.exports = {
    entry: './src/tuits-list.js',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
                resolve: {
                    fullySpecified: false,
                }
            }
        ],
    }
}