/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.atphoto.net', 'localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.atphoto.net',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig; 