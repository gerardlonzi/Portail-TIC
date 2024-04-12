/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'assets.example.com',
          port: '3000',
          pathname: '/[Username]/**',
        },
      ],
    },
  }
export default nextConfig;
