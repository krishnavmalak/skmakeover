/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  outputFileTracingRoot: __dirname,
  experimental: {
    devtoolSegmentExplorer: false,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
