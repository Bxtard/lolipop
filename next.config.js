/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'www.cinemascomics.com',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
