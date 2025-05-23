import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/paul-wood-translations', // Updated to match your GitHub repository name
};

export default nextConfig;
