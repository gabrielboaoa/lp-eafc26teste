/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['k6hrqrxuu8obbfwn.public.blob.vercel-storage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'k6hrqrxuu8obbfwn.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;