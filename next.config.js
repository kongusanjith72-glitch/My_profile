/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/resume.html',
        destination: '/resume',
      },
    ];
  },
};

module.exports = nextConfig;
