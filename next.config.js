/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'scontent.fcfc1-1.fna.fbcdn.net'
            },
            {
                protocol: 'https',
                hostname: 'files.menudino.com'
            }
        ]
    }
}

module.exports = nextConfig
