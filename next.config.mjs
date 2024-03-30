/** @type {import('next').NextConfig} */
import { createProxyMiddleware } from 'http-proxy-middleware'

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://optimism.easscan.org/:path*', // Proxy to remote server
      },
    ]
  },
}

export default nextConfig
