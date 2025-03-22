import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  siteUrl: "https://fleetblox.com",
  generateRobotsTxt: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "ibb.co.com",
      },
    ],
  },
};

export default nextConfig;
