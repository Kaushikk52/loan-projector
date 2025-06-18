import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // <- this is mandatory!
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
