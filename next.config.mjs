/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // hostnames: ["images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.kaffo.co",
      },
    ],
  },
};

export default nextConfig;
