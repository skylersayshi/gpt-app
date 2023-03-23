/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'influencermarketinghub.com']
  },
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['app'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

module.exports = nextConfig
