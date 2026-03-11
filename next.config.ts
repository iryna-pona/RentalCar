import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['ac.goit.global', 'res.cloudinary.com'],
  },
};

export default nextConfig;
