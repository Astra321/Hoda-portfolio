/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add any external domains if needed
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  }
}

module.exports = nextConfig 