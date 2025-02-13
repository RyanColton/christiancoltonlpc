import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  /* config options here */
  experimental: {
    reactCompiler: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'k09sjhn0wy1dkace.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default withPayload(nextConfig);
