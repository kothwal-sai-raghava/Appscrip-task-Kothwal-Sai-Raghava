/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
  experimental: {
    fetchCache: 'force-no-store'
  }
};

export default nextConfig;
