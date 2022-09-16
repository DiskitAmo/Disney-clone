/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["rb.gy", "image.tmdb.org"],
  },
  nextConfig,
};
