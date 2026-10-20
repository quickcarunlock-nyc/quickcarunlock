import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      // Legacy/incorrect slug that was previously linked from the homepage
      { source: "/locations/the-bronx", destination: "/locations/bronx", permanent: true },
      { source: "/locations/the-bronx/", destination: "/locations/bronx", permanent: true },
    ];
  },
};

export default nextConfig;
