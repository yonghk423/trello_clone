/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "1000logos.net",
        pathname: "/wp-content/uploads/2021/05/Trello-logo.png",
      },
    ],
  },
};

module.exports = nextConfig;
