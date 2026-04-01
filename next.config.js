/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100, 75], // Add quality 100
    formats: ['image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;