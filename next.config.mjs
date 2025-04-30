
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: "/hotel",
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=864000, stale-while-revalidate=864000',
          },
        ],
      },
    ];
  }
};

export default nextConfig;