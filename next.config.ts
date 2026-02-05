import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  assetPrefix: '.',
  
  images: {
    unoptimized: true,
  },

  // Remove invalid experimental keys
  experimental: {
    // ppr removed - not needed for static export
    // dynamicIO removed - invalid in Next.js 16
  },

  // Remove eslint config - no longer supported
  typescript: {
    ignoreBuildErrors: false,
  },

  // Ensure trailing slashes for static hosting
  trailingSlash: true,
}

export default nextConfig