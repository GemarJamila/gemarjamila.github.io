import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',            // generate static site to /out
  images: { unoptimized: true }, // next/image on static hosts
  trailingSlash: true,         // avoid 404s on GH Pages refresh
};

export default nextConfig;
