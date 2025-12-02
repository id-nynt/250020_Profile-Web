/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/250020_Profile-Web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/250020_Profile-Web/' : '',
}

module.exports = nextConfig