import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: { unoptimized: true, // Disable image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'damienvallet.github.io',
        port: '',
        pathname: '/portofolio/**',
      },
    ]
  },
};



export default nextConfig;

