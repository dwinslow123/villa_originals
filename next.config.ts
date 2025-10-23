import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "g5gi6ozjbngbtteo.public.blob.vercel-storage.com",
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [ '@svgr/webpack' ],
        as: '*.js',
      }
    }
  }
};

export default nextConfig;
