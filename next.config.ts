import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        port: '',
        pathname: '/w40/**',
      },
    ],
  },
  // images: {
  //   remotePatterns: [new URL('https://flagcdn.com/**')],
  // },
};

export default nextConfig;
