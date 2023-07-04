// /** @type {import('next').NextConfig} */
// const nextConfig = {}
//
// module.exports = nextConfig

const path = require('path');

module.exports = {
    // Enable CSS modules for CSS file imports
    cssModules: true,

    // Add aliases for commonly used directories
    // You can customize these aliases based on your project structure
    webpack: (config, { isServer }) => {
        config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
        config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
        return config;
    },

    // Add additional webpack configuration
    // You can customize this based on your project's requirements
    webpack: (config, { isServer }) => {
        // Add a rule to handle popper.js file
        config.module.rules.push({
            test: /popper\.js$/,
            loader: 'imports-loader',
            options: {
                type: 'commonjs',
                imports: ['single global jQuery=$', 'single global Popper=Popper'],
            },
        });

        return config;
    },
};