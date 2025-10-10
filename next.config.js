/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' to allow dynamic routes
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [25, 50, 75, 85, 100],
  },
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
