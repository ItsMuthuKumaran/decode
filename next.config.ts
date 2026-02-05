import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Remove: output: 'export'
  // Remove: distDir: 'dist'
  // Remove: assetPrefix: '.'
  
  images: {
    unoptimized: false, // Enable Vercel Image Optimization
  },

  experimental: {
    reactCompiler: true,
    viewTransition: true, // Enable View Transitions API
    dynamicIO: true, // Enable dynamic IO
  },

  compress: true,
  trailingSlash: true,
}

export default nextConfig