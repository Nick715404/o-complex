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
};

export default nextConfig;
