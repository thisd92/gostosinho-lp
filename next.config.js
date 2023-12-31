/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'files.menudino.com'
            },
            {
                protocol: 'http',
                hostname: 'localhost'
            }
        ]
    },
    compiler: {
        styledComponents: true,
    }
}

module.exports = nextConfig
