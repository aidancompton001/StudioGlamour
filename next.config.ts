import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/StudioGlamour" : "",
  assetPrefix: isProd ? "/StudioGlamour/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
