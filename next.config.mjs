/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*", "marketplace.canva.com", "i.ibb.co"], // Allow images from all domains
    path: "*",
  },
};

export default nextConfig;
