// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Enable __dirname in webpack bundle
    config.node = {
      __dirname: true
    }
    return config
  },
  images: {
    domains: ['knwrbdsefflxgrvtgfrc.supabase.co']
  }
}

module.exports = nextConfig