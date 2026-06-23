/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages (served at the root user site).
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
