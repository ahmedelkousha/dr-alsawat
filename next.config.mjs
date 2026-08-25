/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['http://localhost:3000', '192.168.1.13:3000'],
};

export default nextConfig;
