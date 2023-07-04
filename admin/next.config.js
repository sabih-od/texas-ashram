const path = require('path')

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
  // experimental: {
  //   esmExternals: false,
  //   jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  // },
  publicRuntimeConfig: {
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };

    return config;
  },
}
