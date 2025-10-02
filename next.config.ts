import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.thum.io",
      },
      {
        protocol: "https",
        hostname: "api.screenshotmachine.com",
      },
    ],
  },
};

export default nextConfig;
