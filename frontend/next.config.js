/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    async redirects() {
        return [
            // {
            //   source: '/',
            //   destination: '/example/login',
            //   permanent: false,
            // },
        ]
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    },
}
