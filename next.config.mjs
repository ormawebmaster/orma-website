/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc', 'img.youtube.com'],
  },

}

export default nextConfig