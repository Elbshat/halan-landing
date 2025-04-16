/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "public-halan-halal-bucket.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
