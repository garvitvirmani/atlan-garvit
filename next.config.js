/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    console.log(`Webpack version: ${webpack.version}`);

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
  async headers() {
    return [
      {
        //  static assets
        source: "/_next/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400", // 1 day (86400 seconds)
          },
        ],
      },
      {
        // Html,js,css
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate", //  0 seconds, must revalidate on each request
          },
        ],
      },
    ];
  },

  reactStrictMode: true,
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
