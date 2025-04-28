import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: { unoptimized: true } // Disable image optimization
};



export default nextConfig;

