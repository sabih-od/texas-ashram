const path = require('path');

module.exports = {
    output: 'export',
    // Enable CSS modules for CSS file imports
    cssModules: true,
    images: {
        domains: ['service.demowebsitelinks.com', 'localhost'],
    },

    publicRuntimeConfig: {
        apiUrls: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3023',
    },

    // Add aliases for commonly used directories
    // You can customize these aliases based on your project structure
    webpack: (config, { isServer }) => {
        // Add aliases for commonly used directories
        config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
        config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');

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
