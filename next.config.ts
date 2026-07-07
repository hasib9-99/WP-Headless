import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/wp-headless/server/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;