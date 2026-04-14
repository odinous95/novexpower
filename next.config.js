/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [60, 75],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
