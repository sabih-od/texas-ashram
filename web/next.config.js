const path = require('path');

module.exports = {
    output: 'export',
    images: { unoptimized: true },

    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    },

    // Add aliases for commonly used directories
    // You can customize these aliases based on your project structure
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.(mp4|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/videos/',
                    outputPath: 'static/videos/',
                    name: '[name].[hash].[ext]',
                    esModule: false,
                },
            },
        });

        return config;
    },
};
