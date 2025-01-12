/** @type {import('next').NextConfig} */
const nextConfig = {
  images: process.env.NODE_ENV === 'test' ? {
    unoptimized: true
  } : {},
}

module.exports = nextConfig 