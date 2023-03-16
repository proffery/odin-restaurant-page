const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },

    devServer: {
        static: {
          directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
      },
};