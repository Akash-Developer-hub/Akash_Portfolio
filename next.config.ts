import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all external images or specify the domain
      },
    ],
  },
};

export default nextConfig;
