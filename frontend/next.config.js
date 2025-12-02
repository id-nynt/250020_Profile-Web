/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // GitHub Pages deployment configuration
  basePath: '/250020_Profile-Web',
  assetPrefix: '/250020_Profile-Web/',
}

module.exports = nextConfig