import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: '/my-portfolio',  // Set the base path to your repo name
  trailingSlash: true,        // Optionally add trailing slash for clean URLs
};

export default nextConfig;
