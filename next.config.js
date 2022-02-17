/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
