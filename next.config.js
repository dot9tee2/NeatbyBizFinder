/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to allow dynamic routes
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  redirects: async () => {
    return [
      // Enforce non-www
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.nearbybizfinder.com' }],
        destination: 'https://nearbybizfinder.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
