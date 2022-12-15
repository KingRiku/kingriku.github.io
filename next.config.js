/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/security/overview',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
