/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images2.imgbox.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    // .env not available everywhere so make secure copy of needed variables in here too
    DEVELOPMENT_API_URL: process.env.DEVELOPMENT_API_URL,
    APPLICATION_NAME: process.env.APPLICATION_NAME ?? "SpaceNext",
    COMPANY_NAME: process.env.APP_DESCRIPTION ?? "Space Next API V4",
  },
};

module.exports = nextConfig;
