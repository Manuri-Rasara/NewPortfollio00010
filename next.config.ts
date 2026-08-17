import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-940ccf6255b54fa799a9b01050e6c227.r2.dev",
      },
    ],
  },
};

export default nextConfig;
