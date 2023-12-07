/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.chucknorris.host'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://yr8j9ksw09.execute-api.us-east-1.amazonaws.com/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
