/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: 'shopping?q=tbn:**',
      },
    ],
  },
  reactStrictMode: false
};

export default nextConfig;
