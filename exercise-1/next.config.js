/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'i.annihil.us',
        port: '',
        pathname: '/u/prod/marvel/**',
      },
    ],
  },
}

module.exports = nextConfig